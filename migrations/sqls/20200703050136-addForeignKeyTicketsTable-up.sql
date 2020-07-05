ALTER TABLE "tickets" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id");
ALTER TABLE "tickets" ADD FOREIGN KEY ("ticket_request") REFERENCES "users" ("id");
