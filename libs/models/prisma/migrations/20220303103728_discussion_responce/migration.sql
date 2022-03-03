/*
  Warnings:

  - Added the required column `userId` to the `DiscussionResponce` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DiscussionResponce" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "DiscussionResponce" ADD CONSTRAINT "DiscussionResponce_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
