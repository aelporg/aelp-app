/*
  Warnings:

  - The values [TA] on the enum `ClassroomRole` will be removed. If these variants are still used in the database, this will fail.
  - A unique constraint covering the columns `[name,environmentId]` on the table `File` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `languageId` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ClassroomRole_new" AS ENUM ('OWNER', 'STUDENT', 'INSTRUCTOR');
ALTER TABLE "ClassroomMember" ALTER COLUMN "classroomRole" TYPE "ClassroomRole_new" USING ("classroomRole"::text::"ClassroomRole_new");
ALTER TYPE "ClassroomRole" RENAME TO "ClassroomRole_old";
ALTER TYPE "ClassroomRole_new" RENAME TO "ClassroomRole";
DROP TYPE "ClassroomRole_old";
COMMIT;

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "languageId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "File_name_environmentId_key" ON "File"("name", "environmentId");

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
