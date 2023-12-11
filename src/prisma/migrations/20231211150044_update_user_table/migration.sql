/*
  Warnings:

  - Made the column `isAdmin` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isTeacher` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `isAdmin` BOOLEAN NOT NULL,
    MODIFY `isTeacher` BOOLEAN NOT NULL;
