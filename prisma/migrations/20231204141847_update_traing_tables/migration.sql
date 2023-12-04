-- AlterTable
ALTER TABLE `Training` ADD COLUMN `isInProgress` BOOLEAN NULL DEFAULT false,
    ADD COLUMN `isRecomendedToDay` BOOLEAN NULL DEFAULT false;
