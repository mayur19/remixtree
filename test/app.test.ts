import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../src/app.js";

describe("publishing boundary", () => {
  it("publishes a permission snapshot", async () => {
    const response = await request(createApp()).post("/api/works/publish").send({
      workId: "seed", title: "Signal", creator: "Aya", permission: "ATTRIBUTION"
    });
    expect(response.status).toBe(201);
    expect(response.body.data.permission).toBe("ATTRIBUTION");
  });
});

