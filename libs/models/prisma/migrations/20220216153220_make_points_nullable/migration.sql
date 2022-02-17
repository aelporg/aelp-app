/*
  Warnings:

  - A unique constraint covering the columns `[userId,questionId]` on the table `QuestionAnswer` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[questionId,multipleChoiceQuestionAnswerId,programmingQuestionAnswerId]` on the table `QuestionAnswer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "AssessmentAnswer" ALTER COLUMN "recPoints" DROP NOT NULL;

-- AlterTable
ALTER TABLE "QuestionAnswer" ALTER COLUMN "points" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAnswer_userId_questionId_key" ON "QuestionAnswer"("userId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAnswer_questionId_multipleChoiceQuestionAnswerId_pr_key" ON "QuestionAnswer"("questionId", "multipleChoiceQuestionAnswerId", "programmingQuestionAnswerId");
