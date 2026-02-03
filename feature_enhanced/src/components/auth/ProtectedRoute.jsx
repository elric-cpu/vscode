import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/SupabaseAuthContext";

const loginRouteMap = {
  client: "/client-portal-login",
  subcontractor: "/subcontractor-portal-login",
};

const portalRouteMap = {
  client: "/client-portal",
  subcontractor: "/subcontractor-portal",
};

const ProtectedRoute = ({ children, role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <p className="text-sm text-gray-500">Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={loginRouteMap[role] || "/"} replace />;
  }

  if (role && user.user_metadata?.role !== role) {
    return (
      <Navigate to={portalRouteMap[user.user_metadata?.role] || "/"} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
