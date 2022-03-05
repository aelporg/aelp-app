/*
  Warnings:

  - A unique constraint covering the columns `[discussionId,userId]` on the table `DiscussionResponce` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Environment" ADD COLUMN     "languageId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "DiscussionResponce_discussionId_userId_key" ON "DiscussionResponce"("discussionId", "userId");

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE SET NULL ON UPDATE CASCADE;
