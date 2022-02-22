/*
  Warnings:

  - You are about to drop the column `statementCompiled` on the `ProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the `AnnoucmentAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClassroomAnnouncements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnnoucmentAttachment" DROP CONSTRAINT "AnnoucmentAttachment_classroomAnnouncementId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomAnnouncements" DROP CONSTRAINT "ClassroomAnnouncements_classroomId_fkey";

-- AlterTable
ALTER TABLE "ProgrammingQuestion" DROP COLUMN "statementCompiled";

-- DropTable
DROP TABLE "AnnoucmentAttachment";

-- DropTable
DROP TABLE "ClassroomAnnouncements";

-- CreateTable
CREATE TABLE "ClassroomAnnouncement" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "ClassroomAnnouncement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnouncementAttachment" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "file" BYTEA NOT NULL,
    "classroomAnnouncementId" TEXT NOT NULL,

    CONSTRAINT "AnnouncementAttachment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassroomAnnouncement" ADD CONSTRAINT "ClassroomAnnouncement_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomAnnouncement" ADD CONSTRAINT "ClassroomAnnouncement_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnouncementAttachment" ADD CONSTRAINT "AnnouncementAttachment_classroomAnnouncementId_fkey" FOREIGN KEY ("classroomAnnouncementId") REFERENCES "ClassroomAnnouncement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
