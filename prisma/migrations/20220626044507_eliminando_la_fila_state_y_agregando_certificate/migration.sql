/*
  Warnings:

  - You are about to drop the column `state` on the `nutritionists` table. All the data in the column will be lost.

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
INSERT INTO "new_nutritionists" ("created_at", "email", "lastName", "name", "password", "role", "rut", "updated_at") SELECT "created_at", "email", "lastName", "name", "password", "role", "rut", "updated_at" FROM "nutritionists";
DROP TABLE "nutritionists";
ALTER TABLE "new_nutritionists" RENAME TO "nutritionists";
CREATE UNIQUE INDEX "nutritionists_email_key" ON "nutritionists"("email");
CREATE TABLE "new_certificates" (
    "idCertificate" TEXT NOT NULL PRIMARY KEY,
    "file" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "adminRut" TEXT NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    CONSTRAINT "certificates_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "certificates_adminRut_fkey" FOREIGN KEY ("adminRut") REFERENCES "admins" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_certificates" ("adminRut", "created_at", "file", "idCertificate", "nutritionistRut", "state", "updated_at") SELECT "adminRut", "created_at", "file", "idCertificate", "nutritionistRut", "state", "updated_at" FROM "certificates";
DROP TABLE "certificates";
ALTER TABLE "new_certificates" RENAME TO "certificates";
CREATE UNIQUE INDEX "certificates_nutritionistRut_key" ON "certificates"("nutritionistRut");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
