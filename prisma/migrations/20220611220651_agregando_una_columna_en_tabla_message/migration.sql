/*
  Warnings:

  - Added the required column `name` to the `messages` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_messages" (
    "idMessage" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "idChat" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "messages_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "chats" ("idChat") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_messages" ("created_at", "idChat", "idMessage", "text") SELECT "created_at", "idChat", "idMessage", "text" FROM "messages";
DROP TABLE "messages";
ALTER TABLE "new_messages" RENAME TO "messages";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
