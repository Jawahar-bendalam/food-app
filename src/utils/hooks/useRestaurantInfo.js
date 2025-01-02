import { useEffect, useState } from "react";
import { RESINFO_URL } from "../constants";

const useRestaurantInfo = (id) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resData = await fetch(RESINFO_URL + id);
    const resDataJson = await resData.json();
    setresInfo(resDataJson.data);
  };

  return resInfo;
};

export default useRestaurantInfo;
