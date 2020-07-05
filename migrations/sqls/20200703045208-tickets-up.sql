CREATE TABLE IF NOT EXISTS tickets
(
  id serial UNIQUE PRIMARY KEY NOT NULL,
  id_user integer,
  ticket_request integer,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
COMMENT ON TABLE tickets IS 'App Users.';
