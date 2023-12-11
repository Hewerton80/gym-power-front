/*
  Warnings:

  - You are about to drop the column `teacherId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - Added the required column `avatarBgColor` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_teacherId_key` ON `User`;

-- DropIndex
DROP INDEX `User_userId_key` ON `User`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `teacherId`,
    DROP COLUMN `userId`,
    ADD COLUMN `avatarBgColor` VARCHAR(191) NOT NULL;
