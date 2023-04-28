/*
  Warnings:

  - Made the column `status` on table `service_request` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
ALTER TYPE "ServiceRequestStatus" ADD VALUE 'pending';

-- AlterTable
ALTER TABLE "service_request" ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'pending';
