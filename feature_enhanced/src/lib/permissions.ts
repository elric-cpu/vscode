const roleRoutes = {
  public: ["/", "/contact", "/services", "/resources"],
  lead: ["/services/commercial/service-agreements"],
  client: ["/client-portal", "/client-complete-profile"],
  subcontractor: ["/subcontractor-portal", "/subcontractor-complete-profile"],
  staff: ["/admin"],
  admin: ["*"]
};

export function canAccessRoute(role, path) {
  const allowed = roleRoutes[role] || roleRoutes.public;
  return allowed.includes("*") || allowed.some((p) => path.startsWith(p));
}

export function hasRole(user, role) {
  return user?.user_metadata?.role === role;
}
