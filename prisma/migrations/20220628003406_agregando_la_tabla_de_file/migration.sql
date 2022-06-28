-- CreateTable
CREATE TABLE "files" (
    "idFile" TEXT NOT NULL PRIMARY KEY,
    "filename" TEXT NOT NULL,
    "originalname" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "adminRut" TEXT NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    CONSTRAINT "files_adminRut_fkey" FOREIGN KEY ("adminRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "files_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "files_adminRut_key" ON "files"("adminRut");

-- CreateIndex
CREATE UNIQUE INDEX "files_nutritionistRut_key" ON "files"("nutritionistRut");
