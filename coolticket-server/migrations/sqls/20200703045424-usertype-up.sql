CREATE TYPE "role" AS ENUM
(
  'SYSTEM',
  'ADMIN',
  'USER'
);
COMMENT ON TYPE role IS 'Possible roles';

CREATE TABLE IF NOT EXISTS usertype (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  name "role" NOT NULL DEFAULT 'USER',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
COMMENT ON TABLE usertype IS 'Users only comes in these flavors';
