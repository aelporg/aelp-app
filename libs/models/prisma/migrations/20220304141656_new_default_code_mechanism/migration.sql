/*
  Warnings:

  - You are about to drop the column `defaultCode` on the `SingleFileProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the `_LanguageToSingleFileProgrammingQuestion` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_LanguageToSingleFileProgrammingQuestion" DROP CONSTRAINT "_LanguageToSingleFileProgrammingQuestion_A_fkey";

-- DropForeignKey
ALTER TABLE "_LanguageToSingleFileProgrammingQuestion" DROP CONSTRAINT "_LanguageToSingleFileProgrammingQuestion_B_fkey";

-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "defaultCode" TEXT NOT NULL DEFAULT E'';

-- AlterTable
ALTER TABLE "SingleFileProgrammingQuestion" DROP COLUMN "defaultCode";

-- DropTable
DROP TABLE "_LanguageToSingleFileProgrammingQuestion";

-- CreateTable
CREATE TABLE "SingleFileProgrammingQuestionDefaultCode" (
    "id" TEXT NOT NULL,
    "singleFileProgrammingQuestionId" TEXT NOT NULL,
    "defaultCode" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "languageId" TEXT NOT NULL,

    CONSTRAINT "SingleFileProgrammingQuestionDefaultCode_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SingleFileProgrammingQuestionDefaultCode" ADD CONSTRAINT "SingleFileProgrammingQuestionDefaultCode_singleFileProgram_fkey" FOREIGN KEY ("singleFileProgrammingQuestionId") REFERENCES "SingleFileProgrammingQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SingleFileProgrammingQuestionDefaultCode" ADD CONSTRAINT "SingleFileProgrammingQuestionDefaultCode_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
