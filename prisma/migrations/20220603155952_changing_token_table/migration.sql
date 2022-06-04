/*
  Warnings:

  - You are about to drop the column `adminEmail` on the `tokens` table. All the data in the column will be lost.
  - You are about to drop the column `clientEmail` on the `tokens` table. All the data in the column will be lost.
  - You are about to drop the column `nutritionistEmail` on the `tokens` table. All the data in the column will be lost.
  - Added the required column `email` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tokens" (
    "idToken" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_tokens" ("idToken", "token") SELECT "idToken", "token" FROM "tokens";
DROP TABLE "tokens";
ALTER TABLE "new_tokens" RENAME TO "tokens";
CREATE UNIQUE INDEX "tokens_email_key" ON "tokens"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
