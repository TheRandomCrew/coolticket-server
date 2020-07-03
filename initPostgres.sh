
#!/usr/bin/env bash

# node node_modules/db-migrate/bin/db-migrate create users --config service/postgres/database.json -e prod
# node node_modules/db-migrate/bin/db-migrate create tickets --config service/postgres/database.json -e prod

NODE_TLS_REJECT_UNAUTHORIZED=0 node node_modules/db-migrate/bin/db-migrate up --config service/postgres/database.json -e prod

# NODE_TLS_REJECT_UNAUTHORIZED=0 node node_modules/db-migrate/bin/db-migrate reset --config service/postgres/database.json -e prod