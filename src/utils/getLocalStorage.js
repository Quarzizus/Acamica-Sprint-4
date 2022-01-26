const getLocalStorage = (key = "") => {
  return localStorage.getItem(key) ? localStorage.getItem(key) : "";
};

export { getLocalStorage };
