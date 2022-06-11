/*
  Warnings:

  - The primary key for the `chats` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `idMessage` on the `chats` table. All the data in the column will be lost.
  - You are about to drop the column `message` on the `chats` table. All the data in the column will be lost.
  - The required column `idChat` was added to the `chats` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `room` to the `chats` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "messages" (
    "idMessage" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "idChat" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "messages_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "chats" ("idChat") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chats" (
    "idChat" TEXT NOT NULL PRIMARY KEY,
    "room" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nutritionistRut" TEXT NOT NULL,
    "clientRut" TEXT NOT NULL,
    CONSTRAINT "chats_clientRut_fkey" FOREIGN KEY ("clientRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "chats_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_chats" ("clientRut", "created_at", "nutritionistRut") SELECT "clientRut", "created_at", "nutritionistRut" FROM "chats";
DROP TABLE "chats";
ALTER TABLE "new_chats" RENAME TO "chats";
CREATE UNIQUE INDEX "chats_room_key" ON "chats"("room");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
