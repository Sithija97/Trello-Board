export const isEmptyString = (param: string) => {
  let isEmpty = false;
  param.length === 0 ? (isEmpty = true) : (isEmpty = false);
  return isEmpty;
};

export const isEmptyArray = (array: any[]) => array.length === 0;

export const getCookieValue = (name: string) => {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

export const generateDate = () => {
  const now = new Date();
  // Get the date in 'dd/mm/yyyy' format
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = now.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
