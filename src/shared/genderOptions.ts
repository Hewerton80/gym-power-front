import { GenderPtBr } from "@/types/User";
export const genderOptions = Object.entries(GenderPtBr).map(([key, value]) => ({
  value: key,
  label: value,
}));
