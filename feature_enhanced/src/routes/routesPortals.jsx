import React from "react";
import AuthCallback from "@/pages/AuthCallback";
import AuthResetPassword from "@/pages/AuthResetPassword";
import ClientPortal from "@/pages/ClientPortal";
import ClientPortalLogin from "@/pages/ClientPortalLogin";
import ClientPortalRegister from "@/pages/ClientPortalRegister";
import ClientPortalForgotPassword from "@/pages/ClientPortalForgotPassword";
import ClientCompleteProfile from "@/pages/ClientCompleteProfile";
import SubcontractorPortal from "@/pages/SubcontractorPortal";
import SubcontractorPortalLogin from "@/pages/SubcontractorPortalLogin";
import SubcontractorPortalRegister from "@/pages/SubcontractorPortalRegister";
import SubcontractorCompleteProfile from "@/pages/SubcontractorCompleteProfile";
import StaffPortal from "@/pages/StaffPortal";
import StaffPortalLogin from "@/pages/StaffPortalLogin";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export const portalRoutes = [
  { path: "/auth/callback", element: <AuthCallback /> },
  { path: "/auth/reset", element: <AuthResetPassword /> },
  { path: "/client-portal-login", element: <ClientPortalLogin /> },
  { path: "/client-portal-forgot-password", element: <ClientPortalForgotPassword /> },
  { path: "/client-portal-register", element: <ClientPortalRegister /> },
  { path: "/client-complete-profile", element: <ClientCompleteProfile /> },
  {
    path: "/client-portal",
    element: (
      <ProtectedRoute role="client">
        <ClientPortal />
      </ProtectedRoute>
    ),
  },
  { path: "/subcontractor-portal-login", element: <SubcontractorPortalLogin /> },
  { path: "/subcontractor-portal-register", element: <SubcontractorPortalRegister /> },
  { path: "/subcontractor-complete-profile", element: <SubcontractorCompleteProfile /> },
  {
    path: "/subcontractor-portal",
    element: (
      <ProtectedRoute role="subcontractor">
        <SubcontractorPortal />
      </ProtectedRoute>
    ),
  },
  { path: "/staff-portal-login", element: <StaffPortalLogin /> },
  {
    path: "/staff-portal",
    element: (
      <ProtectedRoute role="staff">
        <StaffPortal />
      </ProtectedRoute>
    ),
  },
];
