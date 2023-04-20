/*
  Warnings:

  - You are about to drop the column `architectId` on the `service_request` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `service_request` table. All the data in the column will be lost.
  - The `status` column on the `service_request` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `architect` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[registry]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ServiceRequestStatus" AS ENUM ('requested', 'accepted', 'refused');

-- DropForeignKey
ALTER TABLE "architect" DROP CONSTRAINT "architect_userId_fkey";

-- DropForeignKey
ALTER TABLE "service_request" DROP CONSTRAINT "service_request_architectId_fkey";

-- DropForeignKey
ALTER TABLE "service_request" DROP CONSTRAINT "service_request_userId_fkey";

-- AlterTable
ALTER TABLE "service_request" DROP COLUMN "architectId",
DROP COLUMN "userId",
ADD COLUMN     "architect_id" TEXT,
ADD COLUMN     "customer_id" TEXT,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "status",
ADD COLUMN     "status" "ServiceRequestStatus" NOT NULL DEFAULT 'requested';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "registry" TEXT,
ADD COLUMN     "specialty" TEXT;

-- DropTable
DROP TABLE "architect";

-- CreateIndex
CREATE UNIQUE INDEX "users_registry_key" ON "users"("registry");

-- AddForeignKey
ALTER TABLE "service_request" ADD CONSTRAINT "service_request_architect_id_fkey" FOREIGN KEY ("architect_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_request" ADD CONSTRAINT "service_request_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
