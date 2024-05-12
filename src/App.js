import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function handleClick() {
      const response = await fetch("http://localhost:1337/api/Cruds");
      const json = await response.json();
      setData(json);
    }
    handleClick();
    console.log(setData);
  }, []);
  return (
    <div>
      <h1>User Information</h1>
      {data.map((data) => (
        <p key={data.id}>
          Name: 
          {data.id.}
          Email:
          {data.id.Email}
        
          Mobile Number:
          {data.id.MobileNumber}

          </p>
      ))}
    </div>
  );
};

export default App;
