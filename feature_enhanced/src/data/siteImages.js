const base = "/images";
const siteUrl =
  import.meta?.env?.VITE_SITE_URL || "https://bensonhomesolutions.com";
const toAbsolute = (path) =>
  path?.startsWith("http") ? path : `${siteUrl}${path}`;

const siteImages = {
  logo: `${base}/logo.svg`,
  ogDefault: `${base}/og-default.svg`,
  placeholder: `${base}/placeholder.svg`,
  logoAbsolute: toAbsolute(`${base}/logo.svg`),
  ogDefaultAbsolute: toAbsolute(`${base}/og-default.svg`),
};

export default siteImages;
