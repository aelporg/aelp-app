-- AlterTable
ALTER TABLE "InputOutputEvaluationCriteria" ALTER COLUMN "inputs" SET NOT NULL,
ALTER COLUMN "inputs" SET DATA TYPE TEXT,
ALTER COLUMN "outputs" SET NOT NULL,
ALTER COLUMN "outputs" SET DATA TYPE TEXT;