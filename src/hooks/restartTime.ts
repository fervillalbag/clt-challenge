export const restartTime = (date: number) => {
  const dateMinutes = new Date(date).setMinutes(0);
  const dateHours = new Date(dateMinutes).setHours(0);
  const dateMiliseconds = new Date(dateHours).setMilliseconds(0);
  const dateSeconds = new Date(dateMiliseconds).setSeconds(0);

  return new Date(dateSeconds).toISOString();
};
