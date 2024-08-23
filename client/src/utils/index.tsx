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
