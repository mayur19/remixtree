import { describe, expect, it } from "vitest";
import { LineageCatalog } from "../src/domain.js";

describe("LineageCatalog", () => {
  it("freezes source permission and credit snapshots", () => {
    const catalog = new LineageCatalog();
    const source = catalog.publishSeed({ workId: "heron", title: "Neon Heron", creator: "Aya", permission: "ATTRIBUTION" });
    const remix = catalog.publishRemix({ workId: "night-heron", title: "Night Heron", creator: "Bo", permission: "ATTRIBUTION" }, [source.id]);
    source.creator = "Changed outside catalog";
    expect(catalog.credits(remix.id)).toEqual([{ versionId: source.id, creator: "Aya", title: "Neon Heron", permission: "ATTRIBUTION" }]);
  });

  it("rejects a source that does not permit remixing", () => {
    const catalog = new LineageCatalog();
    const source = catalog.publishSeed({ workId: "closed", title: "Closed", creator: "Aya", permission: "NO_REMIX" });
    expect(() => catalog.publishRemix({ workId: "fork", title: "Fork", creator: "Bo", permission: "ATTRIBUTION" }, [source.id])).toThrow("REMIX_NOT_ALLOWED");
  });

  it("deduplicates transitive credits", () => {
    const catalog = new LineageCatalog();
    const one = catalog.publishSeed({ workId: "one", title: "One", creator: "Aya", permission: "ATTRIBUTION" });
    const two = catalog.publishRemix({ workId: "two", title: "Two", creator: "Bo", permission: "ATTRIBUTION" }, [one.id]);
    const three = catalog.publishRemix({ workId: "three", title: "Three", creator: "Cy", permission: "ATTRIBUTION" }, [one.id, two.id]);
    expect(catalog.credits(three.id).map((credit) => credit.versionId).sort()).toEqual([one.id, two.id].sort());
  });
});

