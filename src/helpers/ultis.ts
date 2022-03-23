
export const formatDate = (date: Date) => {
  const dateFormat = require('dateformat');
  return dateFormat(date, 'mmmm dS, yyyy');
};
