import { createReadStream, promises as fs } from "node:fs";
import http from "node:http";
import { extname, join, normalize } from "node:path";

const outDir = join(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "127.0.0.1";
const basePath = process.env.BASE_PATH || "/my-portfolio"; // GitHub Pages project path

const mime = new Map([
  [".html", "text/html; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".txt", "text/plain; charset=utf-8"],
]);

function send404(res) {
  const fallback = join(outDir, "404.html");
  fs.stat(fallback)
    .then(() => {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      createReadStream(fallback).pipe(res);
    })
    .catch(() => {
      res.statusCode = 404;
      res.end("404 Not Found");
    });
}

async function resolvePath(urlPath) {
  if (urlPath.startsWith(basePath)) {
    let rel = urlPath.slice(basePath.length);
    if (!rel || rel === "/") rel = "/index.html";
    const safe = normalize(rel).replace(/^\\|^\/+/, "");
    return join(outDir, safe);
  }
  // Fallback: serve root-level assets like /favicon.ico, /next.svg from out root
  if (urlPath.startsWith("/")) {
    const safe = normalize(urlPath).replace(/^\\|^\/+/, "");
    const candidate = join(outDir, safe);
    try {
      const st = await fs.stat(candidate);
      if (st.isFile()) return candidate;
    } catch {}
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const filePath = await resolvePath(url.pathname);
    if (!filePath) {
      res.statusCode = 404;
      return res.end("Not Found (outside basePath)");
    }
    let stat;
    try {
      stat = await fs.stat(filePath);
    } catch {
      // If path ends with '/', try index.html under that dir
      if (url.pathname.endsWith("/")) {
        const idx = filePath.endsWith("/")
          ? join(filePath, "index.html")
          : join(filePath, "index.html");
        try {
          await fs.stat(idx);
          res.setHeader(
            "Content-Type",
            mime.get(".html") || "text/html; charset=utf-8",
          );
          return createReadStream(idx).pipe(res);
        } catch {
          return send404(res);
        }
      }
      return send404(res);
    }

    if (stat.isDirectory()) {
      const idx = join(filePath, "index.html");
      try {
        await fs.stat(idx);
        res.setHeader(
          "Content-Type",
          mime.get(".html") || "text/html; charset=utf-8",
        );
        return createReadStream(idx).pipe(res);
      } catch {
        return send404(res);
      }
    }

    const type = mime.get(extname(filePath)) || "application/octet-stream";
    res.setHeader("Content-Type", type);
    createReadStream(filePath).pipe(res);
  } catch {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Preview server running: http://${host}:${port}${basePath}/ (serving ${outDir})`,
  );
});
