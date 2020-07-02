CREATE TABLE IF NOT EXISTS users
(
  id serial UNIQUE PRIMARY KEY NOT NULL,
  id_usertype integer,
  name varchar(128),
  email varchar(128),
  password varchar(512), 
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
COMMENT ON TABLE users IS 'App Users.';

CREATE TABLE IF NOT EXISTS tickets
(
  id serial UNIQUE PRIMARY KEY NOT NULL,
  id_user integer,
  ticket_request integer,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
COMMENT ON TABLE tickets IS 'App Users.';

CREATE TYPE "role" AS ENUM
(
  'SYSTEM',
  'ADMIN',
  'USER'
);
COMMENT ON TYPE role IS 'Possible roles';

CREATE TABLE IF NOT EXISTS usertype (
  id serial UNIQUE PRIMARY KEY NOT NULL,
  name role NOT NULL DEFAULT 'USER',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
);
COMMENT ON TABLE usertype IS 'Users only comes in these flavors';

ALTER TABLE "users" ADD FOREIGN KEY ("id_usertype") REFERENCES "roles" ("id");
ALTER TABLE "tickets" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id");
ALTER TABLE "tickets" ADD FOREIGN KEY ("ticket_request") REFERENCES "users" ("id");

INSERT INTO usertype
  ( name )
VALUES
  ('SYSTEM'),
  ('ADMIN'),
  ('USER');

INSERT INTO tickets
  ( id_usertype, name )
VALUES
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL),
  (NULL, NULL);