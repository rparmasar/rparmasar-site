import { useState, useEffect } from "react";

const useLocalData = (local_url, project_id=false) => {
  // This hook loads retrieves data from a local JSON.
  // @param local_url: str - This describes where we can find the requested resource
  // @param project_id: Optional<int> Specifies a project_id to subset the data
  const [localData, setLocalData] = useState(null);
  
  
  useEffect(() => {
    const BASE_URL = `${process.env.PUBLIC_URL}/data/`
    
    fetch(BASE_URL + local_url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (project_id) {
          const project_data = res.data.filter(page => page.project_id === project_id)[0];
          setLocalData(project_data)
        } else {
          setLocalData(res.data);
        }
      })
      .catch(err => console.error(err));
  }, [local_url, project_id]);

  return [localData];
};

export default useLocalData;