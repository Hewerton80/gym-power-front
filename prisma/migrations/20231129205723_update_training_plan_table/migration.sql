/*
  Warnings:

  - A unique constraint covering the columns `[teacherId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherEmail` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherId` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherName` to the `TrainingPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `TrainingPlan` DROP FOREIGN KEY `TrainingPlan_id_fkey`;

-- AlterTable
ALTER TABLE `TrainingPlan` ADD COLUMN `studentId` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacherEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacherId` VARCHAR(191) NOT NULL,
    ADD COLUMN `teacherName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `teacherId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_teacherId_key` ON `User`(`teacherId`);

-- AddForeignKey
ALTER TABLE `TrainingPlan` ADD CONSTRAINT `TrainingPlan_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
