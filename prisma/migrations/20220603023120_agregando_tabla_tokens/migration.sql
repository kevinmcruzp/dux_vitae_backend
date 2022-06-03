/*
  Warnings:

  - You are about to drop the column `token` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `clients` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `nutritionists` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "tokens" (
    "idToken" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "nutritionistEmail" TEXT NOT NULL,
    "adminEmail" TEXT NOT NULL,
    CONSTRAINT "tokens_clientEmail_fkey" FOREIGN KEY ("clientEmail") REFERENCES "clients" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tokens_nutritionistEmail_fkey" FOREIGN KEY ("nutritionistEmail") REFERENCES "nutritionists" ("email") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "tokens_adminEmail_fkey" FOREIGN KEY ("adminEmail") REFERENCES "admins" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_admins" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_admins" ("created_at", "email", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "password", "role", "rut", "updated_at" FROM "admins";
DROP TABLE "admins";
ALTER TABLE "new_admins" RENAME TO "admins";
CREATE UNIQUE INDEX "admins_email_key" ON "admins"("email");
CREATE TABLE "new_clients" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_clients" ("created_at", "email", "lastname", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "lastname", "name", "password", "role", "rut", "updated_at" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
CREATE TABLE "new_nutritionists" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_nutritionists" ("created_at", "email", "lastname", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "lastname", "name", "password", "role", "rut", "updated_at" FROM "nutritionists";
DROP TABLE "nutritionists";
ALTER TABLE "new_nutritionists" RENAME TO "nutritionists";
CREATE UNIQUE INDEX "nutritionists_email_key" ON "nutritionists"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
