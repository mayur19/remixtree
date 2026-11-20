# RemixTree

**Creative lineage that keeps every source visible.** Publish seeds, grow new branches and preserve
attribution as work evolves across creators and generations.

RemixTree is an open-source creative network for images, short audio, text and mixed-media work.
Creators publish immutable versions with explicit remix permissions. Derived versions reference
exact source versions so permissions and credit remain stable even when profiles or works change.

> **Project status: early foundation.** Immutable work versions, permission snapshots,
> multi-source publication and transitive credit manifests are implemented and tested. The
> remaining work is tracked in the [ticket index](docs/TICKETS.md): approximately 10% of the
> planned product is complete.

## Project status

| Area | Status | Tickets |
| --- | --- | --- |
| Repository standards, MIT license and continuous checks | Implemented | Foundation |
| Immutable published work versions | Implemented | Foundation |
| Permission snapshots and forbidden-fork checks | Implemented | Foundation |
| Multi-source lineage edges | Implemented | Foundation |
| Transitive, deduplicated credit manifests | Implemented | Foundation |
| Accounts, durable repositories and work lifecycle | Pending | RT-101 – RT-103 |
| Drafts, media, permissions and source selection | Pending | RT-104 – RT-110 |
| Attribution, collaborators and lineage views | Pending | RT-111 – RT-117 |
| Discovery, profiles and challenges | Pending | RT-118 – RT-122 |
| Moderation, disputes and notifications | Pending | RT-123 – RT-125 |
| Retention, export and complete verification | Pending | RT-126 – RT-129 |
| Accessibility and deployment readiness | Pending | RT-130 |

## Quick start

Requirements: Node.js 22 or later and npm.

    npm install
    npm run dev

Open:

- Web: <http://localhost:3104>
- Health endpoint: <http://localhost:3104/api/health>

POST a synthetic seed to /api/works/publish, then query /api/versions/:id/credits to exercise the
current publication and attribution boundary.

## Demo access (development only)

No account system or credentials exist yet. The local publication endpoint is intentionally open
for foundation verification. Creator ownership, private visibility and authenticated file access
are tracked by RT-101 through RT-105.

## Commands

| Command | What it does |
| --- | --- |
| npm run dev | Start the local server with file watching |
| npm test | Run lineage-domain and request tests |
| npm run typecheck | Check strict TypeScript |
| npm run build | Compile the production server into dist |
| npm start | Run the compiled server |

## Tech stack

| Layer | Choice |
| --- | --- |
| Language | TypeScript in strict mode on Node.js 22+ |
| API | Express 5 with zod request validation |
| Data model | PostgreSQL forward migration plus repository boundary |
| Domain | Version snapshots, remix permissions, lineage and credits |
| Web | Accessible static foundation page served by Express |
| Tests | Vitest and Supertest |
| Checks | GitHub Actions for type checks, tests and sensitive-data scanning |

## Repository layout

    remixtree/
    ├── src/
    │   ├── app.ts             publishing and credit HTTP boundary
    │   ├── domain.ts          version, permission and lineage rules
    │   └── server.ts          process entry point
    ├── test/                  lineage-domain and request tests
    ├── migrations/            work version and source-edge schema
    ├── public/                initial discovery landing page
    ├── docs/
    │   ├── ARCHITECTURE.md    publication and lineage boundaries
    │   ├── ROADMAP.md         milestone sequence
    │   └── TICKETS.md         complete implementation index
    └── .github/               checks and issue template

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Delivery roadmap](docs/ROADMAP.md)
- [Implementation ticket index](docs/TICKETS.md)
- [Product requirements](https://github.com/mayur19/remixtree/issues/1)
- [Public issue tracker](https://github.com/mayur19/remixtree/issues)

## Known limitations

- Work versions and lineage are held in process memory and clear on restart.
- Accounts, media uploads, drafts and creator ownership are not connected.
- The visual lineage explorer, challenges and moderation are pending.
- Permission presets are creator declarations, not legal verification or advice.
- The migration is not yet connected to the HTTP service.

## Contributing, security and license

- [Contributing guide](CONTRIBUTING.md): workflow and verification expectations.
- [Security policy](SECURITY.md): private vulnerability reporting.
- [Community conduct](CODE_OF_CONDUCT.md).
- Licensed under the [MIT License](LICENSE).

