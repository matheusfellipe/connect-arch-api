-- AlterEnum
ALTER TYPE "ServiceRequestStatus" ADD VALUE 'pending';

COMMIT;
-- AlterTable
ALTER TABLE "service_request" ALTER COLUMN "status" SET DEFAULT 'pending';
