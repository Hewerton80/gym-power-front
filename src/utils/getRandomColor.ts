import { getRandomInt } from "@/utils/getRandomInt";

export const getRandomRGBColor = () => {
  const r = getRandomInt(0, 122);
  const g = getRandomInt(0, 122);
  const b = getRandomInt(0, 122);
  return `rgb(${r},${g},${b})`;
};
