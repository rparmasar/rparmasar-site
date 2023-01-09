import { useState, useEffect } from "react";

const useLocalData = (local_url) => {
  // This hook loads retrieves data from a local JSON.
  const [localData, setLocalData] = useState(null);
  
  
  useEffect(() => {
    const BASE_URL = `${process.env.PUBLIC_URL}/data/`
    
    fetch(BASE_URL + local_url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setLocalData(res.data);
      });
  }, [local_url]);

  return [localData];
};

export default useLocalData;