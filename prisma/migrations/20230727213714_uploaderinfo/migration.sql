/*
  Warnings:

  - You are about to drop the column `userId` on the `Homework` table. All the data in the column will be lost.
  - Added the required column `uploaderId` to the `Homework` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Homework" DROP CONSTRAINT "Homework_userId_fkey";

-- AlterTable
ALTER TABLE "Homework" DROP COLUMN "userId",
ADD COLUMN     "uploaderId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_uploaderId_fkey" FOREIGN KEY ("uploaderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
