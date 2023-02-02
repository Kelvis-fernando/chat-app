export const convertMinutesInHourString = (minutes: number) => {
   const hours = Math.floor(minutes / 60);
   return minutes >= 60 ? `${hours.toString()}h` : minutes + "min";
};
