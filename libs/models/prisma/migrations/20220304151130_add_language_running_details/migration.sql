-- AlterTable
ALTER TABLE "Language" ADD COLUMN     "compilerPackageName" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "version" TEXT NOT NULL DEFAULT E'';
