import prisma from "../../src/lib/prisma";
import { seedExercisesAndMuscles } from "./exercises-muscles.seed";
import { seedTraingigs } from "./trainings.seed";
import { seedUser } from "./users.seed";

async function main() {
  await seedExercisesAndMuscles();
  await seedUser();
  await seedTraingigs();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
