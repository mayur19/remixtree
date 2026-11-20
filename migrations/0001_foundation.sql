CREATE TABLE accounts (
  id uuid PRIMARY KEY,
  username text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE works (
  id uuid PRIMARY KEY,
  owner_id uuid NOT NULL REFERENCES accounts(id),
  title text NOT NULL,
  medium text NOT NULL,
  visibility text NOT NULL,
  current_version_id uuid,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE work_versions (
  id uuid PRIMARY KEY,
  work_id uuid NOT NULL REFERENCES works(id),
  version_number integer NOT NULL,
  title_snapshot text NOT NULL,
  creator_snapshot text NOT NULL,
  permission_snapshot jsonb NOT NULL,
  published_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(work_id, version_number)
);
CREATE TABLE source_edges (
  source_version_id uuid NOT NULL REFERENCES work_versions(id),
  derived_version_id uuid NOT NULL REFERENCES work_versions(id),
  permission_snapshot jsonb NOT NULL,
  attribution_snapshot jsonb NOT NULL,
  status text NOT NULL,
  PRIMARY KEY(source_version_id, derived_version_id),
  CHECK(source_version_id <> derived_version_id)
);

