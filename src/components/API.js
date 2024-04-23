import { useEffect, useState } from "react";

const API = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setDatas(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(datas);

  return (
    <div>
      {datas.map((data,i) => (
        <div key={i}>
            <p>{data.name}</p>
            <p>{data.username}</p>
            <p>{data.email}</p>
            <div style={{border:"4px solid black"}}></div>
        </div>
      ))}
    </div>
  );
};

export default API;
