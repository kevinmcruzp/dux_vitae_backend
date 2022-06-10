/*
  Warnings:

  - You are about to drop the column `message` on the `appointments` table. All the data in the column will be lost.
  - Added the required column `description` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_appointments" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    "clientRut" TEXT NOT NULL,
    CONSTRAINT "appointments_clientRut_fkey" FOREIGN KEY ("clientRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "appointments_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_appointments" ("clientRut", "created_at", "idAppointment", "nutritionistRut", "state", "title", "updated_at") SELECT "clientRut", "created_at", "idAppointment", "nutritionistRut", "state", "title", "updated_at" FROM "appointments";
DROP TABLE "appointments";
ALTER TABLE "new_appointments" RENAME TO "appointments";
CREATE UNIQUE INDEX "appointments_clientRut_key" ON "appointments"("clientRut");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
