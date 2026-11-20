import express from "express";
import { z } from "zod";
import { LineageCatalog } from "./domain.js";

const seedInput = z.object({
  workId: z.string().min(1),
  title: z.string().min(1).max(160),
  creator: z.string().min(1).max(80),
  permission: z.enum(["NO_REMIX", "ATTRIBUTION", "ATTRIBUTION_SHARE_ALIKE", "NONCOMMERCIAL_ATTRIBUTION"])
});

export function createApp(catalog = new LineageCatalog()) {
  const app = express();
  app.use(express.json({ limit: "128kb" }));
  app.use(express.static("public"));
  app.get("/api/health", (_request, response) => response.json({ status: "ok" }));
  app.post("/api/works/publish", (request, response) => {
    const parsed = seedInput.safeParse(request.body);
    if (!parsed.success) return response.status(422).json({ error: "VALIDATION_FAILED" });
    return response.status(201).json({ data: catalog.publishSeed(parsed.data) });
  });
  app.get("/api/versions/:id/credits", (request, response) => {
    if (!catalog.versions.has(request.params.id)) return response.status(404).json({ error: "NOT_FOUND" });
    return response.json({ data: catalog.credits(request.params.id) });
  });
  return app;
}

