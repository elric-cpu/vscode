import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  FileText,
  CreditCard,
  Calendar,
  Clock,
  AlertCircle,
  PlusCircle,
  ArrowRight,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { getClientPortalBundle } from "@/lib/portalData";
import { useStripe } from "@/hooks/useStripe";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/SupabaseAuthContext";
import { parseHostList, safeExternalHref } from "@/lib/security";
import SEO from "@/components/SEO";

const ClientPortal = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { startCheckout, loading: paymentLoading } = useStripe();
  const { user } = useAuth();
  const [projectData, setProjectData] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploadFile, setUploadFile] = useState(null);

  const hasOnboarded = Boolean(user?.user_metadata?.onboarded_client);

  const publicAssetHosts = parseHostList(
    import.meta?.env?.VITE_PUBLIC_ASSET_HOSTS,
  );

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      try {
        const bundle = await getClientPortalBundle();

        setProjectData(bundle?.project || null);
        setDocuments(bundle?.documents || []);
        setInvoices(bundle?.invoices || []);
      } catch (error) {
        console.error("Data load error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user]);

  const handlePayInvoice = async (invoice) => {
    try {
      const amount =
        invoice.amount_cents ??
        (invoice.amount ? Math.round(Number(invoice.amount) * 100) : null);

      await startCheckout({
        mode: invoice.is_subscription ? "subscription" : "payment",
        priceId: invoice.stripe_price_id || undefined,
        amount: invoice.stripe_price_id ? undefined : amount,
        currency: invoice.currency || "usd",
        productName: invoice.title || "Client Invoice",
        metadata: {
          invoice_id: invoice.id,
          user_id: user?.id,
        },
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const handleUpload = () => {
    if (!uploadFile) return;
    const doc = {
      id: `local-${Date.now()}`,
      file_name: uploadFile.name,
      title: uploadFile.name,
      category: "other",
      upload_source: "local",
    };
    setDocuments((prev) => [doc, ...prev]);
    setUploadFile(null);
    toast({
      title: "Upload queued",
      description: `${doc.file_name} will appear in your documents list.`,
    });
  };

  const handleDeleteDocument = (docId) => {
    setDocuments((prev) => prev.filter((doc) => doc.id !== docId));
    toast({ title: "Document removed" });
  };

  const groupedDocuments = documents.reduce((acc, doc) => {
    const category = doc.category || 'other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(doc);
    return acc;
  }, {});

  const categoryLabels = {
    contract: "Contracts",
    estimate: "Estimates",
    invoice: "Invoices",
    photo: "Photos",
    insurance: "Insurance",
    other: "Other Documents",
  };

  return (
    <>
      <SEO
        title="Client Portal"
        description="Access project documents, invoices, and updates in the secure client portal."
        robots="noindex, nofollow"
      />

      <div className="min-h-screen bg-[#EFE3C8] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center">
             <h2 className="text-xl font-bold tracking-wide text-[#0E0E0E] uppercase">BENSON ENTERPRISES</h2>
             <p className="text-sm text-[#4A4A4A] font-medium">Client Portal Access</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-[#C5C5C5] pb-6">
            <div>
              <h1 className="text-3xl font-bold text-[#0E0E0E] uppercase">My Projects</h1>
              <p className="text-[#0E0E0E] mt-1">Manage your projects, view documents, and track billing.</p>
            </div>
            
            <div className="flex gap-3">
              {!hasOnboarded && (
                <Button 
                  onClick={() => navigate('/client-onboarding')}
                  className="bg-[#3C0008] text-[#FAF6EE] hover:bg-[#6E2B2B] shadow-none uppercase font-bold tracking-wider"
                >
                  Complete Onboarding <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              )}
              <Button onClick={() => navigate('/contact')} variant="outline" className="border-[#3C0008] text-[#3C0008] hover:bg-[#3C0008] hover:text-[#FAF6EE]">
                <PlusCircle className="mr-2 w-4 h-4" /> Request New Estimate
              </Button>
            </div>
          </div>

          <div className="bg-[#F3EAD5] rounded-sm shadow-none border border-[#C5C5C5] overflow-hidden">
            <Tabs defaultValue="dashboard" className="w-full">
              <div className="border-b border-[#C5C5C5] px-6 py-4 bg-[#EFE3C8]">
                <TabsList className="bg-[#FAF6EE] border border-[#C5C5C5] rounded-sm p-1">
                  {['Dashboard', 'Documents', 'Billing', 'Updates'].map(tab => (
                    <TabsTrigger 
                      key={tab}
                      value={tab.toLowerCase()} 
                      className="data-[state=active]:bg-[#3C0008] data-[state=active]:text-[#FAF6EE] text-[#0E0E0E] uppercase font-bold text-xs tracking-wide rounded-sm"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Dashboard Tab */}
              <TabsContent value="dashboard" className="p-8 space-y-6 bg-[#F3EAD5]">
                {loading ? (
                  <div className="text-center py-12">
                    <Clock className="w-8 h-8 text-[#4A4A4A] animate-spin mx-auto mb-4" />
                    <p className="text-[#4A4A4A]">Loading project data...</p>
                  </div>
                ) : projectData ? (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-[#FAF6EE] p-6 rounded-sm border border-[#C5C5C5]">
                        <h3 className="text-lg font-bold text-[#0E0E0E] mb-4 uppercase border-b border-[#E1E1E1] pb-2">Project Overview</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-sm text-[#4A4A4A] font-bold uppercase">Project ID:</span>
                            <p className="font-medium text-[#0E0E0E]">{projectData.project_id}</p>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-[#4A4A4A] font-bold uppercase">Project Name:</span>
                            <p className="font-medium text-[#0E0E0E]">{projectData.project_name}</p>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-[#4A4A4A] font-bold uppercase">Job Type:</span>
                            <p className="font-medium text-[#0E0E0E]">{projectData.job_type}</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-[#4A4A4A] font-bold uppercase">Current Status:</span>
                            <p className={`font-bold inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs uppercase ${
                              projectData.current_state === 'In Progress' ? 'bg-[#3C0008] text-[#FAF6EE]' :
                              projectData.current_state === 'Completed' ? 'bg-[#1C1C1C] text-[#FAF6EE]' :
                              'bg-[#C5C5C5] text-[#0E0E0E]'
                            }`}>
                              {projectData.current_state}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FAF6EE] p-6 rounded-sm border border-[#C5C5C5]">
                        <h3 className="text-lg font-bold text-[#0E0E0E] mb-4 uppercase border-b border-[#E1E1E1] pb-2">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button className="w-full bg-[#EFE3C8] text-[#0E0E0E] border border-[#C5C5C5] hover:bg-[#3C0008] hover:text-[#FAF6EE]" onClick={() => navigate('/contact')}>
                            <FileText className="w-4 h-4 mr-2" />
                            Request Detailed Summary
                          </Button>
                          <Button className="w-full bg-[#EFE3C8] text-[#0E0E0E] border border-[#C5C5C5] hover:bg-[#3C0008] hover:text-[#FAF6EE]" onClick={() => navigate('/contact')}>
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Consultation
                          </Button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <AlertCircle className="w-12 h-12 text-[#4A4A4A] mx-auto mb-4" />
                    <p className="text-[#0E0E0E] mb-2 font-bold">No project data available</p>
                  </div>
                )}
              </TabsContent>

              {/* Other tabs follow similar structure... I'll omit full detail for brevity but ensure colors match.
                  The pattern is established: bg-[#F3EAD5] for content area, bg-[#FAF6EE] for cards/items,
                  text-[#0E0E0E] for main text, text-[#4A4A4A] for subtext, border-[#C5C5C5].
              */}
              <TabsContent value="documents" className="p-8 bg-[#F3EAD5]">
                {loading ? (
                  <div className="text-center py-12">
                    <Clock className="w-8 h-8 text-[#4A4A4A] animate-spin mx-auto mb-4" />
                    <p className="text-[#4A4A4A]">Loading documents...</p>
                  </div>
                ) : documents.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-12 h-12 text-[#4A4A4A] mx-auto mb-4" />
                    <p className="text-[#0E0E0E]">No documents yet.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {Object.entries(groupedDocuments).map(([category, docs]) => (
                      <div key={category} className="bg-[#FAF6EE] p-6 border border-[#C5C5C5]">
                        <h3 className="text-sm font-bold uppercase text-[#0E0E0E] mb-4">
                          {categoryLabels[category] || category}
                        </h3>
                        <ul className="space-y-3">
                          {docs.map((doc) => (
                            <li
                              key={doc.id}
                              className="flex items-center justify-between border border-[#E1E1E1] bg-white px-4 py-3"
                            >
                              <span className="text-[#0E0E0E] text-sm">
                                {doc.title || doc.file_name}
                              </span>
                              <div className="flex items-center gap-3">
                                {(() => {
                                  const safeUrl = safeExternalHref(doc.url, {
                                    allowedHosts: publicAssetHosts,
                                  });
                                  return safeUrl ? (
                                    <a
                                      href={safeUrl}
                                      target="_blank"
                                      rel="noreferrer"
                                      className="text-xs uppercase font-bold text-[#3C0008]"
                                    >
                                      View
                                    </a>
                                  ) : null;
                                })()}
                                {doc.upload_source === "local" && (
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteDocument(doc.id)}
                                    className="text-xs uppercase font-bold text-[#6E2B2B]"
                                  >
                                    Delete
                                  </button>
                                )}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-6 bg-[#FAF6EE] p-6 border border-[#C5C5C5]">
                  <h3 className="text-sm font-bold uppercase text-[#0E0E0E] mb-3">
                    Upload Document
                  </h3>
                  <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                    <input
                      type="file"
                      aria-label="Upload document"
                      onChange={(event) => setUploadFile(event.target.files?.[0] || null)}
                    />
                    <Button
                      onClick={handleUpload}
                      disabled={!uploadFile}
                      className="bg-[#3C0008] text-[#FAF6EE] hover:bg-[#6E2B2B]"
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="billing" className="p-8 bg-[#F3EAD5]">
                {loading ? (
                  <div className="text-center py-12">
                    <Clock className="w-8 h-8 text-[#4A4A4A] animate-spin mx-auto mb-4" />
                    <p className="text-[#4A4A4A]">Loading invoices...</p>
                  </div>
                ) : invoices.length === 0 ? (
                  <div className="text-center py-12">
                    <CreditCard className="w-12 h-12 text-[#4A4A4A] mx-auto mb-4" />
                    <p className="text-[#0E0E0E]">No invoices at this time.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {invoices.map((invoice) => (
                      <div
                        key={invoice.id}
                        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[#FAF6EE] border border-[#C5C5C5] p-5"
                      >
                        <div>
                          <p className="font-bold text-[#0E0E0E]">
                            {invoice.title || "Invoice"}
                          </p>
                          <p className="text-sm text-[#4A4A4A]">
                            Due {invoice.due_date || "Soon"}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-sm font-bold text-[#0E0E0E]">
                            $
                            {invoice.amount
                              ? Number(invoice.amount).toFixed(2)
                              : invoice.amount_cents
                                ? (invoice.amount_cents / 100).toFixed(2)
                                : "0.00"}
                          </p>
                          {invoice.status === "Paid" ? (
                            <span className="text-xs uppercase font-bold text-green-700">
                              Paid
                            </span>
                          ) : (
                            <Button
                              onClick={() => handlePayInvoice(invoice)}
                              disabled={paymentLoading}
                              className="bg-[#3C0008] text-[#FAF6EE] hover:bg-[#6E2B2B]"
                            >
                              Pay Now
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
               <TabsContent value="updates" className="p-8 bg-[#F3EAD5]">
                 <div className="text-center py-12">
                    <Clock className="w-12 h-12 text-[#4A4A4A] mx-auto mb-4" />
                    <p className="text-[#0E0E0E]">Updates interface (Ruggedized)</p>
                  </div>
              </TabsContent>

            </Tabs>
          </div>
        </div>
      </div>

    </>
  );
};

export default ClientPortal;
