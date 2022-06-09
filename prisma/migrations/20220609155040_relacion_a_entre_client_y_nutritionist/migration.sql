/*
  Warnings:

  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "messages";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "chats" (
    "idMessage" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nutritionistRut" TEXT NOT NULL,
    "clientRut" TEXT NOT NULL,
    CONSTRAINT "chats_clientRut_fkey" FOREIGN KEY ("clientRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "chats_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ClientToNutritionist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ClientToNutritionist_A_fkey" FOREIGN KEY ("A") REFERENCES "clients" ("rut") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ClientToNutritionist_B_fkey" FOREIGN KEY ("B") REFERENCES "nutritionists" ("rut") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClientToNutritionist_AB_unique" ON "_ClientToNutritionist"("A", "B");

-- CreateIndex
CREATE INDEX "_ClientToNutritionist_B_index" ON "_ClientToNutritionist"("B");
