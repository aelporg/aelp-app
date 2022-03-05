/*
  Warnings:

  - Made the column `languageId` on table `Environment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_languageId_fkey";

-- AlterTable
ALTER TABLE "Environment" ALTER COLUMN "languageId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
