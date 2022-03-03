/*
  Warnings:

  - A unique constraint covering the columns `[discussionId,userId]` on the table `DiscussionVote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DiscussionVote_discussionId_userId_key" ON "DiscussionVote"("discussionId", "userId");
