-- CreateTable
CREATE TABLE "ClassroomAnnouncements" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "ClassroomAnnouncements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnnoucmentAttachment" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "file" BYTEA NOT NULL,
    "classroomAnnouncementId" TEXT NOT NULL,

    CONSTRAINT "AnnoucmentAttachment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ClassroomAnnouncements" ADD CONSTRAINT "ClassroomAnnouncements_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnnoucmentAttachment" ADD CONSTRAINT "AnnoucmentAttachment_classroomAnnouncementId_fkey" FOREIGN KEY ("classroomAnnouncementId") REFERENCES "ClassroomAnnouncements"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
