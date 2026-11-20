# Implementation ticket index

Full issue descriptions include acceptance criteria, dependencies and verification notes.

- [ ] RT-101 | Foundation | backend,security | Add username accounts and sessions | Establish revocable access and creator profiles without public private identifiers.
- [ ] RT-102 | Foundation | backend,database | Implement transactional PostgreSQL repositories | Persist works, versions, edges and credit snapshots.
- [ ] RT-103 | Foundation | backend | Add work visibility and archive lifecycle | Enforce public, unlisted, private and archived behavior.
- [ ] RT-104 | Publishing | frontend | Build draft and publish workspace | Cover medium, metadata, warnings, permissions and conflict recovery.
- [ ] RT-105 | Publishing | backend,security | Implement safe media storage | Validate type, size, checksum, quota and authorized download.
- [ ] RT-106 | Publishing | backend,database | Implement immutable work versions | Freeze content, media checksum, creators and permission declaration.
- [ ] RT-107 | Rights | frontend | Build plain-language permission selector | Explain effects without presenting legal advice.
- [ ] RT-108 | Rights | backend,testing | Enforce exact-version remix permission | Apply later permission changes only to future forks.
- [ ] RT-109 | Remixing | backend,frontend | Build source selection and fork workflow | Support one primary and four secondary sources.
- [ ] RT-110 | Remixing | backend,testing | Add atomic cycle-safe publication | Validate all sources and create edges or nothing.
- [ ] RT-111 | Attribution | backend | Generate direct attribution manifests | Preserve creator, title, permission and source token snapshots.
- [ ] RT-112 | Attribution | backend,frontend | Generate transitive deduplicated credits | Keep required ancestors visible across deep branches.
- [ ] RT-113 | Attribution | backend | Export human-readable and structured credits | Make manifests portable and checksum-aware.
- [ ] RT-114 | Collaboration | backend,database | Implement collaborator credit invitations | Block publication when required credit remains unresolved.
- [ ] RT-115 | Collaboration | frontend | Build shared draft conflict handling | Support sequential edits with explicit stale-write recovery.
- [ ] RT-116 | Lineage | frontend | Build bounded lineage visualization | Expand branches on demand with filters and focus navigation.
- [ ] RT-117 | Lineage | frontend,accessibility | Build equivalent hierarchical lineage list | Express generations, creators and contribution notes by keyboard.
- [ ] RT-118 | Discovery | backend,frontend | Add transparent discovery views | Support recent, most-remixed, curated and zero-remix seeds.
- [ ] RT-119 | Discovery | backend,frontend | Implement search, profiles and collections | Enforce visibility and version-specific links.
- [ ] RT-120 | Challenges | backend,database | Implement challenge lifecycle and eligibility | Enforce dates, accepted media and source requirements.
- [ ] RT-121 | Challenges | backend,testing | Add voting, self-vote prevention and frozen results | Resolve ties deterministically and record curator picks separately.
- [ ] RT-122 | Challenges | frontend | Build challenge directory and submission experience | Explain eligibility and state transitions clearly.
- [ ] RT-123 | Moderation | backend,security | Implement content reports and actions | Hide media while preserving limited lineage placeholders.
- [ ] RT-124 | Moderation | backend | Implement lineage disputes and appeal | Block new forks and retain every decision.
- [ ] RT-125 | Notifications | backend,frontend | Add remix, credit, challenge and moderation notifications | Support per-work mute and safe payloads.
- [ ] RT-126 | Retention | backend,testing | Implement reference-aware media cleanup | Never remove assets used by published versions.
- [ ] RT-127 | Portability | backend | Build creator archive export | Include owned versions, manifests and authorized media.
- [ ] RT-128 | Quality | testing | Automate permission, lineage and challenge browser journeys | Cover forbidden forks, cycles, hiding, voting and isolation.
- [ ] RT-129 | Quality | security | Complete abuse, upload and authorization review | Verify file serving, reports, quotas and private lineage.
- [ ] RT-130 | Release | accessibility,devops | Finish accessibility and deployment readiness | Provide runbook, backups, observability and responsive polish.

