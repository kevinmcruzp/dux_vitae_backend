/*
  Warnings:

  - You are about to drop the column `lastname` on the `nutritionists` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `clients` table. All the data in the column will be lost.
  - Added the required column `lastName` to the `nutritionists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `clients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_nutritionists" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_nutritionists" ("created_at", "email", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "name", "password", "role", "rut", "updated_at" FROM "nutritionists";
DROP TABLE "nutritionists";
ALTER TABLE "new_nutritionists" RENAME TO "nutritionists";
CREATE UNIQUE INDEX "nutritionists_email_key" ON "nutritionists"("email");
CREATE TABLE "new_clients" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_clients" ("created_at", "email", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "name", "password", "role", "rut", "updated_at" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
