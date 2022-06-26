-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_nutritionists" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_nutritionists" ("created_at", "email", "lastName", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "lastName", "name", "password", "role", "rut", "updated_at" FROM "nutritionists";
DROP TABLE "nutritionists";
ALTER TABLE "new_nutritionists" RENAME TO "nutritionists";
CREATE UNIQUE INDEX "nutritionists_email_key" ON "nutritionists"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
