/*
  Warnings:

  - You are about to drop the column `extension` on the `File` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "File_name_extension_idx";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "extension";

-- CreateIndex
CREATE INDEX "File_name_idx" ON "File"("name");
