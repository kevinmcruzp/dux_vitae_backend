/*
  Warnings:

  - You are about to drop the `_CategoryToNutritionist` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `adminRut` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_CategoryToNutritionist_B_index";

-- DropIndex
DROP INDEX "_CategoryToNutritionist_AB_unique";

-- AlterTable
ALTER TABLE "nutritionists" ADD COLUMN "birthday" TEXT;
ALTER TABLE "nutritionists" ADD COLUMN "category" TEXT;
ALTER TABLE "nutritionists" ADD COLUMN "description" TEXT;
ALTER TABLE "nutritionists" ADD COLUMN "gender" TEXT;
ALTER TABLE "nutritionists" ADD COLUMN "phone" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_CategoryToNutritionist";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_categories" (
    "idCategory" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "adminRut" TEXT NOT NULL,
    CONSTRAINT "categories_adminRut_fkey" FOREIGN KEY ("adminRut") REFERENCES "admins" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_categories" ("created_at", "idCategory", "name", "updated_at") SELECT "created_at", "idCategory", "name", "updated_at" FROM "categories";
DROP TABLE "categories";
ALTER TABLE "new_categories" RENAME TO "categories";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
