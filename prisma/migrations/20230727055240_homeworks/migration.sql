-- CreateTable
CREATE TABLE "Homework" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "fileUrl" TEXT NOT NULL,
    "allowedStudents" INTEGER[],

    CONSTRAINT "Homework_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Homework" ADD CONSTRAINT "Homework_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
