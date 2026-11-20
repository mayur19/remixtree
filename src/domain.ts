import { randomUUID } from "node:crypto";

export type Permission = "NO_REMIX" | "ATTRIBUTION" | "ATTRIBUTION_SHARE_ALIKE" | "NONCOMMERCIAL_ATTRIBUTION";
export interface WorkVersion { id: string; workId: string; title: string; creator: string; permission: Permission; version: number }
export interface SourceEdge { sourceVersionId: string; derivedVersionId: string; permissionSnapshot: Permission; creatorSnapshot: string; titleSnapshot: string }

export class LineageCatalog {
  readonly versions = new Map<string, WorkVersion>();
  readonly edges: SourceEdge[] = [];

  publishSeed(input: Omit<WorkVersion, "id" | "version">): WorkVersion {
    const prior = [...this.versions.values()].filter((version) => version.workId === input.workId);
    const version = { ...input, id: randomUUID(), version: prior.length + 1 };
    this.versions.set(version.id, version);
    return structuredClone(version);
  }

  publishRemix(input: Omit<WorkVersion, "id" | "version">, sourceIds: string[]): WorkVersion {
    if (sourceIds.length === 0 || sourceIds.length > 5) throw new Error("INVALID_SOURCE_COUNT");
    const sources = sourceIds.map((id) => {
      const source = this.versions.get(id);
      if (!source) throw new Error("SOURCE_NOT_FOUND");
      if (source.permission === "NO_REMIX") throw new Error("REMIX_NOT_ALLOWED");
      return source;
    });
    const version = this.publishSeed(input);
    if (sources.some((source) => this.hasPath(version.id, source.id))) {
      this.versions.delete(version.id);
      throw new Error("LINEAGE_CYCLE");
    }
    for (const source of sources) {
      this.edges.push({
        sourceVersionId: source.id,
        derivedVersionId: version.id,
        permissionSnapshot: source.permission,
        creatorSnapshot: source.creator,
        titleSnapshot: source.title
      });
    }
    return version;
  }

  private hasPath(from: string, to: string): boolean {
    const visited = new Set<string>();
    const queue = [from];
    while (queue.length) {
      const current = queue.shift()!;
      if (current === to) return true;
      if (visited.has(current)) continue;
      visited.add(current);
      this.edges.filter((edge) => edge.sourceVersionId === current).forEach((edge) => queue.push(edge.derivedVersionId));
    }
    return false;
  }

  credits(versionId: string): Array<{ versionId: string; creator: string; title: string; permission: Permission }> {
    const results = new Map<string, { versionId: string; creator: string; title: string; permission: Permission }>();
    const queue = [versionId];
    const visited = new Set<string>();
    while (queue.length) {
      const derived = queue.shift()!;
      if (visited.has(derived)) continue;
      visited.add(derived);
      for (const edge of this.edges.filter((candidate) => candidate.derivedVersionId === derived)) {
        results.set(edge.sourceVersionId, {
          versionId: edge.sourceVersionId,
          creator: edge.creatorSnapshot,
          title: edge.titleSnapshot,
          permission: edge.permissionSnapshot
        });
        queue.push(edge.sourceVersionId);
      }
    }
    return [...results.values()];
  }
}

