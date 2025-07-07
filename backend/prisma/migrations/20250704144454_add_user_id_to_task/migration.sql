/*
  Warnings:

  - You are about to drop the `UserTasks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserTasks" DROP CONSTRAINT "UserTasks_taskId_fkey";

-- DropForeignKey
ALTER TABLE "UserTasks" DROP CONSTRAINT "UserTasks_userId_fkey";

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- DropTable
DROP TABLE "UserTasks";

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
