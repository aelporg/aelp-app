/*
  Warnings:

  - You are about to drop the column `inputOutputEvaluationResultId` on the `EvaluationResult` table. All the data in the column will be lost.
  - You are about to drop the `InputOutputEvaluationResult` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EvaluationResult" DROP CONSTRAINT "EvaluationResult_inputOutputEvaluationResultId_fkey";

-- DropIndex
DROP INDEX "DiscussionResponce_discussionId_userId_key";

-- DropIndex
DROP INDEX "EvaluationResult_inputOutputEvaluationResultId_key";

-- AlterTable
ALTER TABLE "EvaluationResult" DROP COLUMN "inputOutputEvaluationResultId";

-- DropTable
DROP TABLE "InputOutputEvaluationResult";
