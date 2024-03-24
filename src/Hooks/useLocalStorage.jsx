import { useEffect, useState } from "react";
import { getStored } from "../utils/SaveToLocalstorage/SaveToLocalStorage";

const useLocalStorage = () => {
  const [localData, setLocalData] = useState([]);

  useEffect(() => {
    setLocalData(getStored());
  }, []);

  return { localData };
};

export default useLocalStorage;
