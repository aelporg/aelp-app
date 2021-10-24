/*
  Warnings:

  - You are about to drop the column `inputOutputEvaluationCriteriaId` on the `EvaluationCriteria` table. All the data in the column will be lost.
  - You are about to drop the `ClassroomMembers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `InputOutputEvaluationCriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `MultipleFilesProgrammingQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `SingleFileProgrammingQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ClassroomMembers" DROP CONSTRAINT "ClassroomMembers_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomMembers" DROP CONSTRAINT "ClassroomMembers_userId_fkey";

-- DropForeignKey
ALTER TABLE "EvaluationCriteria" DROP CONSTRAINT "EvaluationCriteria_inputOutputEvaluationCriteriaId_fkey";

-- AlterTable
ALTER TABLE "EvaluationCriteria" DROP COLUMN "inputOutputEvaluationCriteriaId",
ADD COLUMN     "inputOutputEvalCritId" TEXT;

-- AlterTable
ALTER TABLE "InputOutputEvaluationCriteria" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "MultipleFilesProgrammingQuestion" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SingleFileProgrammingQuestion" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "ClassroomMembers";

-- CreateTable
CREATE TABLE "ClassroomMember" (
    "classroomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "classroomRole" "ClassroomRole" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomMember_pkey" PRIMARY KEY ("classroomId","userId")
);

-- AddForeignKey
ALTER TABLE "ClassroomMember" ADD CONSTRAINT "ClassroomMember_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomMember" ADD CONSTRAINT "ClassroomMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationCriteria" ADD CONSTRAINT "EvaluationCriteria_inputOutputEvalCritId_fkey" FOREIGN KEY ("inputOutputEvalCritId") REFERENCES "InputOutputEvaluationCriteria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
