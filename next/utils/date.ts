export const formatDate = (date: string) => {
  const dayjs = require("dayjs");
  require("dayjs/locale/fr"); // Load the French locale
  return dayjs(date).locale("fr").format("DD MMMM YYYY");
};
