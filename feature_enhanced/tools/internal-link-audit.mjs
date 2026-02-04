import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const BASE_URL = "https://bensonhomesolutions.com";
const MIN_OUT = 5;
const MIN_IN = 5;

const normalizePath = (path) => {
  if (!path) return null;
  if (!path.startsWith("/")) return null;
  const [clean] = path.split(/[?#]/);
  if (clean.length > 1 && clean.endsWith("/")) return clean.slice(0, -1);
  return clean;
};

const extractInternalLinks = (content) => {
  const links = new Set();
  const regex = /\b(?:to|href)\s*[:=]\s*["'](\/[^"'#\s]*)/g;
  let match;
  while ((match = regex.exec(content))) {
    const normalized = normalizePath(match[1]);
    if (normalized) links.add(normalized);
  }
  return links;
};

const getSitemapPaths = async () => {
  const sitemap = await readFile("public/sitemap.xml", "utf8");
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1],
  );
  return urls
    .filter((url) => url.startsWith(BASE_URL))
    .map((url) => normalizePath(url.replace(BASE_URL, "")))
    .filter(Boolean);
};

const main = async () => {
  const files = [];
  const walk = async (dir) => {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && fullPath.endsWith(".jsx")) {
        files.push(fullPath);
      }
    }
  };
  await walk(path.join("src", "pages"));
  const sitemapPaths = new Set(await getSitemapPaths());
  const inboundCounts = Object.fromEntries(
    [...sitemapPaths].map((path) => [path, 0]),
  );

  const pageOutCounts = [];
  const linkTargets = new Set();

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const links = extractInternalLinks(content);
    const uniqueLinks = new Set([...links].map((link) => normalizePath(link)));
    uniqueLinks.forEach((link) => {
      linkTargets.add(link);
      if (link in inboundCounts) {
        inboundCounts[link] += 1;
      }
    });
    pageOutCounts.push({
      file,
      count: uniqueLinks.size,
      links: [...uniqueLinks],
    });
  }

  const lowOut = pageOutCounts.filter((page) => page.count < MIN_OUT);
  const lowIn = Object.entries(inboundCounts)
    .filter(([, count]) => count < MIN_IN)
    .sort((a, b) => a[1] - b[1]);
  const orphans = Object.entries(inboundCounts)
    .filter(([, count]) => count === 0)
    .map(([path]) => path);
  const unknownLinks = [...linkTargets].filter((link) => !sitemapPaths.has(link));

  console.log(`Pages scanned: ${files.length}`);
  console.log(`Sitemap paths: ${sitemapPaths.size}`);
  console.log("");

  console.log(`Pages with < ${MIN_OUT} internal links out: ${lowOut.length}`);
  lowOut.forEach((page) => {
    console.log(`- ${page.file} (${page.count})`);
  });
  console.log("");

  console.log(`Sitemap paths with < ${MIN_IN} internal links in: ${lowIn.length}`);
  lowIn.slice(0, 30).forEach(([path, count]) => {
    console.log(`- ${path}: ${count}`);
  });
  if (lowIn.length > 30) {
    console.log(`...${lowIn.length - 30} more`);
  }
  console.log("");

  console.log(`Orphan sitemap paths (0 inbound): ${orphans.length}`);
  orphans.slice(0, 30).forEach((path) => console.log(`- ${path}`));
  if (orphans.length > 30) {
    console.log(`...${orphans.length - 30} more`);
  }
  console.log("");

  console.log(`Internal links not in sitemap: ${unknownLinks.length}`);
  unknownLinks.slice(0, 30).forEach((path) => console.log(`- ${path}`));
  if (unknownLinks.length > 30) {
    console.log(`...${unknownLinks.length - 30} more`);
  }
};

main().catch((error) => {
  console.error("Audit failed:", error);
  process.exitCode = 1;
});
