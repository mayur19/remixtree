# Architecture

The published work version is the durable unit of lineage.

- Permission and attribution are frozen when a derived version is published.
- Source edges connect exact versions, never mutable works.
- Publication validates all sources and creates edges atomically.
- Lineage traversal is bounded and visibility-aware.
- Hidden content may become a limited placeholder without deleting descendants.

The first slice proves version and credit rules in memory. PostgreSQL repositories, accounts, media storage and moderation follow next.

