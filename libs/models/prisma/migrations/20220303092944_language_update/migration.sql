-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "defaultFileName" TEXT NOT NULL DEFAULT E'main.${extension}';
