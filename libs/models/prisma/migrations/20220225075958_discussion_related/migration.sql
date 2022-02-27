-- CreateTable
CREATE TABLE "Discussion" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Discussion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionResponce" (
    "id" TEXT NOT NULL,
    "discussionId" TEXT NOT NULL,
    "responce" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscussionResponce_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionVote" (
    "id" TEXT NOT NULL,
    "isUpvote" BOOLEAN NOT NULL DEFAULT false,
    "discussionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "DiscussionVote_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiscussionTag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DiscussionTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DiscussionToDiscussionTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DiscussionToDiscussionTag_AB_unique" ON "_DiscussionToDiscussionTag"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscussionToDiscussionTag_B_index" ON "_DiscussionToDiscussionTag"("B");

-- AddForeignKey
ALTER TABLE "DiscussionResponce" ADD CONSTRAINT "DiscussionResponce_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionVote" ADD CONSTRAINT "DiscussionVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DiscussionVote" ADD CONSTRAINT "DiscussionVote_discussionId_fkey" FOREIGN KEY ("discussionId") REFERENCES "Discussion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscussionToDiscussionTag" ADD FOREIGN KEY ("A") REFERENCES "Discussion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscussionToDiscussionTag" ADD FOREIGN KEY ("B") REFERENCES "DiscussionTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
