-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "editorConfigName" TEXT NOT NULL DEFAULT E'${extension}';
