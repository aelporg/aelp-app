/*
  Warnings:

  - A unique constraint covering the columns `[inviteCode]` on the table `Classroom` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Classroom_inviteCode_key" ON "Classroom"("inviteCode");
