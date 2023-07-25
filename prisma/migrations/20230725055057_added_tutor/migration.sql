/*
  Warnings:

  - A unique constraint covering the columns `[tutorEmail]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[zoomLink]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "tutorEmail" TEXT,
ADD COLUMN     "tutorName" TEXT,
ADD COLUMN     "zoomLink" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_tutorEmail_key" ON "User"("tutorEmail");

-- CreateIndex
CREATE UNIQUE INDEX "User_zoomLink_key" ON "User"("zoomLink");
