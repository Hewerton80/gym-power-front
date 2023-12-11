/*
  Warnings:

  - You are about to drop the column `isRecomendedToDay` on the `Training` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Exercise` ADD COLUMN `status` ENUM('READY_TO_START', 'IN_PROGRESS', 'FINISHED') NOT NULL DEFAULT 'READY_TO_START';

-- AlterTable
ALTER TABLE `Training` DROP COLUMN `isRecomendedToDay`,
    ADD COLUMN `isRecommendedToDay` BOOLEAN NULL DEFAULT false;
