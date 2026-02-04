import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "@playwright/test";
import { landingRoutes, serviceRoutes, toolsRoutes } from "./routes.mjs";

const HOST = "127.0.0.1";
const PORT = process.env.PRERENDER_PORT || "4173";
const BASE_URL = `http://${HOST}:${PORT}`;
const DIST_DIR = path.join(process.cwd(), "dist");

const prerenderRoutes = new Set([
  "/",
  "/services",
  ...toolsRoutes,
  ...serviceRoutes,
  ...landingRoutes,
]);

const waitForServer = async () => {
  const maxAttempts = 30;
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    try {
      const response = await fetch(BASE_URL, { method: "GET" });
      if (response.ok) return;
    } catch (error) {
      // ignore and retry
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error("Preview server did not start in time.");
};

const resolveOutputPath = (route) => {
  if (route === "/") return path.join(DIST_DIR, "index.html");
  if (route.endsWith(".html")) return path.join(DIST_DIR, route);
  return path.join(DIST_DIR, route, "index.html");
};

const startPreviewServer = () => {
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  return spawn(
    command,
    ["run", "preview", "--", "--host", HOST, "--port", PORT],
    { stdio: "inherit" },
  );
};

const main = async () => {
  const previewProcess = startPreviewServer();
  try {
    await waitForServer();
    const browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: 1365, height: 900 },
    });

    for (const route of prerenderRoutes) {
      const url = `${BASE_URL}${route}`;
      await page.goto(url, { waitUntil: "networkidle" });
      const html = await page.content();
      const outputPath = resolveOutputPath(route);
      await mkdir(path.dirname(outputPath), { recursive: true });
      await writeFile(outputPath, html, "utf8");
      console.log(`Prerendered: ${route}`);
    }

    await browser.close();
  } finally {
    previewProcess.kill("SIGTERM");
  }
};

main().catch((error) => {
  console.error("Prerender failed:", error);
  process.exitCode = 1;
});
