import { Gender } from "@prisma/client";

export const genderOptions = [
  { label: "Masculino", value: Gender.M },
  { label: "Feminino", value: Gender.F },
  { label: "Outro", value: Gender.O },
];
