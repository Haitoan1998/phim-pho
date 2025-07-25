export const formatMinutesToHours = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const paddedMins = mins.toString().padStart(2, "0");
  return `${hours}h ${paddedMins}m`;
};
