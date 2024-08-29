import { latLongType } from "@/store/slices/locationSlice";

const gradToRad = (grad: number | string) => {
  return (Number(grad) * Math.PI) / 180;
};
export const calcDistance = (
  point1: latLongType | undefined,
  point2: latLongType | undefined
) => {
  if (!point1 || !point2) return 0;
  const R = 6378.137; // Radius of earth in KM
  const dLat = gradToRad(point2.latitude) - gradToRad(point1.latitude);
  const dLon = gradToRad(point2.longitude) - gradToRad(point1.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(gradToRad(point1.latitude)) *
      Math.cos(gradToRad(point2.latitude)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return Number(d.toFixed(3));
};
