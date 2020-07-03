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
