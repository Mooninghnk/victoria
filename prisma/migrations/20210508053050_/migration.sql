/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Login` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `Login` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "pass" TEXT NOT NULL
);
INSERT INTO "new_User" ("id", "name", "email", "lastname", "pass") SELECT "id", "name", "email", "lastname", "pass" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
CREATE UNIQUE INDEX "User.pass_unique" ON "User"("pass");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Login.email_unique" ON "Login"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Login.password_unique" ON "Login"("password");
