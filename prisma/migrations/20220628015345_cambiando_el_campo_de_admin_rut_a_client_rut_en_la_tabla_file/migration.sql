/*
  Warnings:

  - You are about to drop the column `adminRut` on the `files` table. All the data in the column will be lost.
  - Added the required column `clientRut` to the `files` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_files" (
    "idFile" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "clientRut" TEXT NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    CONSTRAINT "files_clientRut_fkey" FOREIGN KEY ("clientRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "files_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_files" ("created_at", "filename", "idFile", "nutritionistRut", "originalname", "updated_at") SELECT "created_at", "filename", "idFile", "nutritionistRut", "originalname", "updated_at" FROM "files";
DROP TABLE "files";
ALTER TABLE "new_files" RENAME TO "files";
CREATE UNIQUE INDEX "files_clientRut_key" ON "files"("clientRut");
CREATE UNIQUE INDEX "files_nutritionistRut_key" ON "files"("nutritionistRut");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
