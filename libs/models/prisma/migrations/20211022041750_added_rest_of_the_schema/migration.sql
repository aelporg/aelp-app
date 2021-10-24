-- CreateEnum
CREATE TYPE "ClassroomRole" AS ENUM ('STUDENT', 'INSTRUCTOR', 'TA');

-- CreateEnum
CREATE TYPE "QuestionType" AS ENUM ('MULTIPLE_CHOICE', 'PROGRAMMING');

-- CreateEnum
CREATE TYPE "ProgrammingQuestionType" AS ENUM ('SINGLE_FILE', 'MULTIPLE_FILE');

-- CreateEnum
CREATE TYPE "EvaluationCriteriaType" AS ENUM ('MANUAL', 'INPUT_OUTPUT');

-- CreateEnum
CREATE TYPE "AssessmentType" AS ENUM ('EXAM', 'ASSIGNMENT');

-- CreateTable
CREATE TABLE "Classroom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT,
    "section" TEXT,
    "inviteCode" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassroomMembers" (
    "id" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "classroomRole" "ClassroomRole" NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ClassroomMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question" (
    "id" TEXT NOT NULL,
    "questionType" "QuestionType" NOT NULL,
    "points" INTEGER NOT NULL,
    "multipleChoiceQuestionId" TEXT,
    "programmingQuestionId" TEXT,
    "assessmentId" TEXT,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultipleChoiceQuestion" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MultipleChoiceQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultipleChoiceQuestionChoice" (
    "id" TEXT NOT NULL,
    "choice" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "correct" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MultipleChoiceQuestionChoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgrammingQuestion" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "statementMrkdwn" TEXT NOT NULL,
    "statementCompiled" TEXT NOT NULL,
    "programmingQuestionType" "ProgrammingQuestionType" NOT NULL,
    "singleFileProgrammingQuestionId" TEXT,
    "multipleFilesProgrammingQuestionId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProgrammingQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvaluationCriteria" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "EvaluationCriteriaType" NOT NULL,
    "totalPoints" INTEGER NOT NULL,
    "inputOutputEvaluationCriteriaId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EvaluationCriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InputOutputEvaluationCriteria" (
    "id" TEXT NOT NULL,
    "inputs" TEXT[],
    "outputs" TEXT[],

    CONSTRAINT "InputOutputEvaluationCriteria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SingleFileProgrammingQuestion" (
    "id" TEXT NOT NULL,

    CONSTRAINT "SingleFileProgrammingQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MultipleFilesProgrammingQuestion" (
    "id" TEXT NOT NULL,

    CONSTRAINT "MultipleFilesProgrammingQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Language" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Language_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "environmentId" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assessment" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "assessmentType" "AssessmentType" NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),
    "submitAfterEnd" BOOLEAN NOT NULL DEFAULT false,
    "totalPoins" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Environment" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "programmingQuestionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Environment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LanguageToSingleFileProgrammingQuestion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_FileToMultipleFilesProgrammingQuestion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_multipleChoiceQuestionId_key" ON "Question"("multipleChoiceQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "Question_programmingQuestionId_key" ON "Question"("programmingQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "MultipleChoiceQuestionChoice_correct_questionId_key" ON "MultipleChoiceQuestionChoice"("correct", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgrammingQuestion_singleFileProgrammingQuestionId_key" ON "ProgrammingQuestion"("singleFileProgrammingQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "ProgrammingQuestion_multipleFilesProgrammingQuestionId_key" ON "ProgrammingQuestion"("multipleFilesProgrammingQuestionId");

-- CreateIndex
CREATE UNIQUE INDEX "Language_name_key" ON "Language"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Language_extension_key" ON "Language"("extension");

-- CreateIndex
CREATE UNIQUE INDEX "_LanguageToSingleFileProgrammingQuestion_AB_unique" ON "_LanguageToSingleFileProgrammingQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_LanguageToSingleFileProgrammingQuestion_B_index" ON "_LanguageToSingleFileProgrammingQuestion"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FileToMultipleFilesProgrammingQuestion_AB_unique" ON "_FileToMultipleFilesProgrammingQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_FileToMultipleFilesProgrammingQuestion_B_index" ON "_FileToMultipleFilesProgrammingQuestion"("B");

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomMembers" ADD CONSTRAINT "ClassroomMembers_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomMembers" ADD CONSTRAINT "ClassroomMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_multipleChoiceQuestionId_fkey" FOREIGN KEY ("multipleChoiceQuestionId") REFERENCES "MultipleChoiceQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_programmingQuestionId_fkey" FOREIGN KEY ("programmingQuestionId") REFERENCES "ProgrammingQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_assessmentId_fkey" FOREIGN KEY ("assessmentId") REFERENCES "Assessment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MultipleChoiceQuestionChoice" ADD CONSTRAINT "MultipleChoiceQuestionChoice_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "MultipleChoiceQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgrammingQuestion" ADD CONSTRAINT "ProgrammingQuestion_singleFileProgrammingQuestionId_fkey" FOREIGN KEY ("singleFileProgrammingQuestionId") REFERENCES "SingleFileProgrammingQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgrammingQuestion" ADD CONSTRAINT "ProgrammingQuestion_multipleFilesProgrammingQuestionId_fkey" FOREIGN KEY ("multipleFilesProgrammingQuestionId") REFERENCES "MultipleFilesProgrammingQuestion"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvaluationCriteria" ADD CONSTRAINT "EvaluationCriteria_inputOutputEvaluationCriteriaId_fkey" FOREIGN KEY ("inputOutputEvaluationCriteriaId") REFERENCES "InputOutputEvaluationCriteria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_environmentId_fkey" FOREIGN KEY ("environmentId") REFERENCES "Environment"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Environment" ADD CONSTRAINT "Environment_programmingQuestionId_fkey" FOREIGN KEY ("programmingQuestionId") REFERENCES "ProgrammingQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToSingleFileProgrammingQuestion" ADD FOREIGN KEY ("A") REFERENCES "Language"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LanguageToSingleFileProgrammingQuestion" ADD FOREIGN KEY ("B") REFERENCES "SingleFileProgrammingQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToMultipleFilesProgrammingQuestion" ADD FOREIGN KEY ("A") REFERENCES "File"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FileToMultipleFilesProgrammingQuestion" ADD FOREIGN KEY ("B") REFERENCES "MultipleFilesProgrammingQuestion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
