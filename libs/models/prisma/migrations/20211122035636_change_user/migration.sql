/*
  Warnings:

  - You are about to drop the column `totalPoins` on the `Assessment` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Classroom` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Environment` table. All the data in the column will be lost.
  - You are about to drop the column `programmingQuestionId` on the `Environment` table. All the data in the column will be lost.
  - The primary key for the `LinkedAccount` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `LinkedAccount` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `MultipleFilesProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `MultipleFilesProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `SingleFileProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SingleFileProgrammingQuestion` table. All the data in the column will be lost.
  - You are about to drop the column `invalid` on the `UserRefreshToken` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[competitionId]` on the table `Assessment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[externalId]` on the table `LinkedAccount` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `scratchPadData` to the `Environment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `programmingQuestionId` to the `EvaluationCriteria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `externalId` to the `LinkedAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languageId` to the `MultipleFilesProgrammingQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultCode` to the `SingleFileProgrammingQuestion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expiryDate` to the `UserRefreshToken` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateEnum
CREATE TYPE "EnvironmentPermissionLevel" AS ENUM ('OWNER', 'READ_WRITE', 'READ');

-- AlterEnum
ALTER TYPE "ClassroomRole" ADD VALUE 'OWNER';

-- AlterEnum
ALTER TYPE "EvaluationCriteriaType" ADD VALUE 'PLAG_CHECK';

-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Environment" DROP CONSTRAINT "Environment_programmingQuestionId_fkey";

-- AlterTable
ALTER TABLE "Assessment" DROP COLUMN "totalPoins",
ADD COLUMN     "classroomId" TEXT,
ADD COLUMN     "competitionId" TEXT,
ADD COLUMN     "totalPoints" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Classroom" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "Environment" DROP COLUMN "ownerId",
DROP COLUMN "programmingQuestionId",
ADD COLUMN     "scratchPadData" TEXT NOT NULL,
ADD COLUMN     "submitted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "EvaluationCriteria" ADD COLUMN     "hidden" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "programmingQuestionId" TEXT NOT NULL,
ADD COLUMN     "requiredToPass" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "LinkedAccount" DROP CONSTRAINT "LinkedAccount_pkey",
DROP COLUMN "id",
ADD COLUMN     "externalId" TEXT NOT NULL,
ADD CONSTRAINT "LinkedAccount_pkey" PRIMARY KEY ("userId", "providerId");

-- AlterTable
ALTER TABLE "MultipleFilesProgrammingQuestion" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "languageId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SingleFileProgrammingQuestion" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "defaultCode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL;

-- AlterTable
ALTER TABLE "UserRefreshToken" DROP COLUMN "invalid",
ADD COLUMN     "expiryDate" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "AssessmentAnswer" (
    "userId" TEXT NOT NULL,
    "assessmentId" TEXT NOT NULL,
    "reviewed" BOOLEAN NOT NULL DEFAULT false,
    "submittedAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "recPoints" INTEGER NOT NULL,

    CONSTRAINT "AssessmentAnswer_pkey" PRIMARY KEY ("assessmentId","userId")
);

-- CreateTable
CREATE TABLE "QuestionAnswer" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "multipleChoiceQuestionAnswerId" TEXT,
    "programmingQuestionAnswerId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assessmentSubmissionId" TEXT,
    "points" INTEGER NOT NULL,
    "userId" TEXT,

    CONSTRAINT "QuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultipleChoiceQuestionAnswer" (
    "id" TEXT NOT NULL,
    "questionChoiceId" TEXT NOT NULL,

    CONSTRAINT "MultipleChoiceQuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgrammingQuestionAnswer" (
    "id" TEXT NOT NULL,
    "envirnmentId" TEXT NOT NULL,

    CONSTRAINT "ProgrammingQuestionAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationResult" (
    "id" TEXT NOT NULL,
    "evaluationCriteriaId" TEXT NOT NULL,
    "evaulationPoints" DOUBLE PRECISION NOT NULL,
    "inputOutputEvaluationResultId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "programmingQuestionAnswerId" TEXT NOT NULL,

    CONSTRAINT "EvaluationResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputOutputEvaluationResult" (
    "id" TEXT NOT NULL,
    "resultOutputs" TEXT[],

    CONSTRAINT "InputOutputEvaluationResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PracticeProgrammingQuestion" (
    "id" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "diffculty" "Difficulty" NOT NULL,
    "classroomId" TEXT,

    CONSTRAINT "PracticeProgrammingQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnvironmentPermission" (
    "userId" TEXT NOT NULL,
    "environmentId" TEXT NOT NULL,
    "permission" "EnvironmentPermissionLevel" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "Competition" (
    "id" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "creatorUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompetitionParticipant" (
    "userId" TEXT NOT NULL,
    "competitionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompetitionParticipant_pkey" PRIMARY KEY ("competitionId","userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAnswer_multipleChoiceQuestionAnswerId_key" ON "QuestionAnswer"("multipleChoiceQuestionAnswerId");

-- CreateIndex
CREATE UNIQUE INDEX "QuestionAnswer_programmingQuestionAnswerId_key" ON "QuestionAnswer"("programmingQuestionAnswerId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgrammingQuestionAnswer_envirnmentId_key" ON "ProgrammingQuestionAnswer"("envirnmentId");

-- CreateIndex
CREATE UNIQUE INDEX "EvaluationResult_inputOutputEvaluationResultId_key" ON "EvaluationResult"("inputOutputEvaluationResultId");

-- CreateIndex
CREATE UNIQUE INDEX "PracticeProgrammingQuestion_questionId_key" ON "PracticeProgrammingQuestion"("questionId");

-- CreateIndex
CREATE UNIQUE INDEX "EnvironmentPermission_environmentId_userId_key" ON "EnvironmentPermission"("environmentId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Assessment_competitionId_key" ON "Assessment"("competitionId");

-- CreateIndex
CREATE INDEX "File_name_extension_idx" ON "File"("name", "extension");

-- CreateIndex
CREATE INDEX "Language_name_extension_idx" ON "Language"("name", "extension");

-- CreateIndex
CREATE UNIQUE INDEX "LinkedAccount_externalId_key" ON "LinkedAccount"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MultipleFilesProgrammingQuestion" ADD CONSTRAINT "MultipleFilesProgrammingQuestion_languageId_fkey" FOREIGN KEY ("languageId") REFERENCES "Language"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationCriteria" ADD CONSTRAINT "EvaluationCriteria_programmingQuestionId_fkey" FOREIGN KEY ("programmingQuestionId") REFERENCES "ProgrammingQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentAnswer" ADD CONSTRAINT "AssessmentAnswer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssessmentAnswer" ADD CONSTRAINT "AssessmentAnswer_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAnswer" ADD CONSTRAINT "QuestionAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAnswer" ADD CONSTRAINT "QuestionAnswer_multipleChoiceQuestionAnswerId_fkey" FOREIGN KEY ("multipleChoiceQuestionAnswerId") REFERENCES "MultipleChoiceQuestionAnswer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAnswer" ADD CONSTRAINT "QuestionAnswer_programmingQuestionAnswerId_fkey" FOREIGN KEY ("programmingQuestionAnswerId") REFERENCES "ProgrammingQuestionAnswer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionAnswer" ADD CONSTRAINT "QuestionAnswer_assessmentSubmissionId_userId_fkey" FOREIGN KEY ("assessmentSubmissionId", "userId") REFERENCES "AssessmentAnswer"("assessmentId", "userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MultipleChoiceQuestionAnswer" ADD CONSTRAINT "MultipleChoiceQuestionAnswer_questionChoiceId_fkey" FOREIGN KEY ("questionChoiceId") REFERENCES "MultipleChoiceQuestionChoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgrammingQuestionAnswer" ADD CONSTRAINT "ProgrammingQuestionAnswer_envirnmentId_fkey" FOREIGN KEY ("envirnmentId") REFERENCES "Environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationResult" ADD CONSTRAINT "EvaluationResult_evaluationCriteriaId_fkey" FOREIGN KEY ("evaluationCriteriaId") REFERENCES "EvaluationCriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationResult" ADD CONSTRAINT "EvaluationResult_inputOutputEvaluationResultId_fkey" FOREIGN KEY ("inputOutputEvaluationResultId") REFERENCES "InputOutputEvaluationResult"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationResult" ADD CONSTRAINT "EvaluationResult_programmingQuestionAnswerId_fkey" FOREIGN KEY ("programmingQuestionAnswerId") REFERENCES "ProgrammingQuestionAnswer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeProgrammingQuestion" ADD CONSTRAINT "PracticeProgrammingQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "ProgrammingQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PracticeProgrammingQuestion" ADD CONSTRAINT "PracticeProgrammingQuestion_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentPermission" ADD CONSTRAINT "EnvironmentPermission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvironmentPermission" ADD CONSTRAINT "EnvironmentPermission_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Competition" ADD CONSTRAINT "Competition_creatorUserId_fkey" FOREIGN KEY ("creatorUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionParticipant" ADD CONSTRAINT "CompetitionParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompetitionParticipant" ADD CONSTRAINT "CompetitionParticipant_competitionId_fkey" FOREIGN KEY ("competitionId") REFERENCES "Competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
