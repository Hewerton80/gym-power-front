import prisma from "../../src/lib/prisma";
import { faker } from "@faker-js/faker";

export async function seedTraingigs() {
  const teachers = await prisma.user.findMany({ where: { isTeacher: true } });
  const students = await prisma.user.findMany({ where: { isTeacher: false } });
  const exercises = await prisma.exercise.findMany();
  const exercisesTrainigsA = [...exercises].splice(0, 7).map((exercise) => ({
    exerciseId: exercise.id,
    intervalInSeconds: 60,
    order: 1,
  }));
  const exercisesTrainigsB = [...exercises].splice(7, 14).map((exercise) => ({
    exerciseId: exercise.id,
    intervalInSeconds: 60,
    order: 1,
  }));
  const exercisesTrainigsC = [...exercises].splice(14, 21).map((exercise) => ({
    exerciseId: exercise.id,
    intervalInSeconds: 60,
    order: 1,
  }));
  const exercisesTrainigsD = [...exercises].splice(21, 31).map((exercise) => ({
    exerciseId: exercise.id,
    intervalInSeconds: 60,
    order: 1,
  }));

  for (const teacher of teachers) {
    for (const student of students) {
      const studentHasTraining = await prisma.trainingPlan.count({
        where: { studentId: student.id, teacherId: teacher.id },
      });
      if (!studentHasTraining) {
        await prisma.trainingPlan.create({
          data: {
            name: faker.helpers.arrayElement([
              "Treino para hipertrofia",
              "Treino para emagrecimento",
              "Treino para força",
            ]),
            studentId: student.id,
            teacherId: teacher.id,
            teacherEmail: teacher.email,
            teacherName: teacher.name,
            trainings: {
              create: [
                {
                  name: "Treino A",
                  trainingExercises: { create: exercisesTrainigsA },
                },
                {
                  name: "Treino B",
                  trainingExercises: { create: exercisesTrainigsB },
                },
                {
                  name: "Treino C",
                  trainingExercises: { create: exercisesTrainigsC },
                },
                {
                  name: "Treino D",
                  trainingExercises: { create: exercisesTrainigsD },
                },
              ],
            },
          },
        });
      }
    }
  }
}
