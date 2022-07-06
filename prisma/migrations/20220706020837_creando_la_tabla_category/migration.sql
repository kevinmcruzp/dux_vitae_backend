-- CreateTable
CREATE TABLE "categories" (
    "idCategory" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToNutritionist" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_CategoryToNutritionist_A_fkey" FOREIGN KEY ("A") REFERENCES "categories" ("idCategory") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_CategoryToNutritionist_B_fkey" FOREIGN KEY ("B") REFERENCES "nutritionists" ("rut") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToNutritionist_AB_unique" ON "_CategoryToNutritionist"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToNutritionist_B_index" ON "_CategoryToNutritionist"("B");
