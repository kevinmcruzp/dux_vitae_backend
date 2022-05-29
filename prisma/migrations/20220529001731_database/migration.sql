-- CreateTable
CREATE TABLE "clients" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "nutritionists" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "messages" (
    "idMessage" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nutritionistRut" TEXT NOT NULL,
    "clientRut" TEXT NOT NULL,
    CONSTRAINT "messages_clientRut_fkey" FOREIGN KEY ("clientRut") REFERENCES "clients" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "messages_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "admins" (
    "rut" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "certificates" (
    "idCertificate" TEXT NOT NULL PRIMARY KEY,
    "file" TEXT NOT NULL,
    "state" BOOLEAN NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "adminRut" TEXT NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    CONSTRAINT "certificates_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "certificates_adminRut_fkey" FOREIGN KEY ("adminRut") REFERENCES "admins" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "appointments" (
    "idAppointment" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "nutritionistRut" TEXT NOT NULL,
    CONSTRAINT "appointments_nutritionistRut_fkey" FOREIGN KEY ("nutritionistRut") REFERENCES "nutritionists" ("rut") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "certificates_nutritionistRut_key" ON "certificates"("nutritionistRut");
