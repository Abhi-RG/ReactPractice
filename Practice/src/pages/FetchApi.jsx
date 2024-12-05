import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.org/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      {data?.map((item) => (
          <li key={item.id}>
            {item.firstname}
            {item.lastname}
          </li>
      ))}
    </ul>
  );
};

export default FetchApi;
