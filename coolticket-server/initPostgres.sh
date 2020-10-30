
#!/usr/bin/env bash

# node node_modules/db-migrate/bin/db-migrate create users -e prod
# node node_modules/db-migrate/bin/db-migrate create tickets -e prod

NODE_TLS_REJECT_UNAUTHORIZED=0 node node_modules/db-migrate/bin/db-migrate up -e prod

# NODE_TLS_REJECT_UNAUTHORIZED=0 node node_modules/db-migrate/bin/db-migrate reset -e prod