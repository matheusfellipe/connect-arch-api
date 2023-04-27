-- AlterTable
ALTER TABLE "service_request" ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "status" DROP DEFAULT;
