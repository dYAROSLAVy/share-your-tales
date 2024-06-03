const formatter = new Intl.DateTimeFormat("ru", {
  year: "2-digit",
  day: "numeric",
  month: "2-digit",
});

export const formatDate = (date: number) => {
  return formatter.format(date);
};
