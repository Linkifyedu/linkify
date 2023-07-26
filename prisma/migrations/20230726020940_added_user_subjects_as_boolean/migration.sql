/*
  Warnings:

  - You are about to drop the `Subject` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mathStudent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "readingStudent" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "scienceStudent" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "Subject";
