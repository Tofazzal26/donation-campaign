export const getStored = () => {
  const AlreadyStored = localStorage.getItem("donation");
  if (AlreadyStored) {
    return JSON.parse(AlreadyStored);
  }
  return [];
};

export const getToLocalStorage = (id) => {
  const stored = getStored();
  const isExisted = stored.find((idx) => idx.id === id.id);
  if (!isExisted) {
    stored.push(id);
    localStorage.setItem("donation", JSON.stringify(stored));
    alert("Added to local storage");
  } else {
    alert("Already Added");
  }
};
