/*
  Warnings:

  - Added the required column `role` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `nutritionists` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
INSERT INTO "new_clients" ("created_at", "email", "lastname", "name", "password", "rut", "updated_at") SELECT "created_at", "email", "lastname", "name", "password", "rut", "updated_at" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE TABLE "new_admins" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_admins" ("created_at", "email", "password", "rut", "updated_at") SELECT "created_at", "email", "password", "rut", "updated_at" FROM "admins";
DROP TABLE "admins";
ALTER TABLE "new_admins" RENAME TO "admins";
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
INSERT INTO "new_nutritionists" ("created_at", "email", "lastname", "name", "password", "rut", "updated_at") SELECT "created_at", "email", "lastname", "name", "password", "rut", "updated_at" FROM "nutritionists";
DROP TABLE "nutritionists";
ALTER TABLE "new_nutritionists" RENAME TO "nutritionists";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
