/*
  Warnings:

  - You are about to drop the column `status` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Exercise` DROP COLUMN `status`;

-- AlterTable
ALTER TABLE `TrainingExercise` ADD COLUMN `status` ENUM('READY_TO_START', 'IN_PROGRESS', 'FINISHED') NOT NULL DEFAULT 'READY_TO_START';
