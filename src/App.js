import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData =async () => {
      try{
        const response = await axios.get("http://localhost:1337/api/Cruds")
        setData(response.data);
      } catch (error){
        console.error("error fetching data:", error);
      }
    } 
fetchData();

  }, [])

  return (
    <div>
      <h1>Strapi API</h1>
      {data.map((index) =>(
        <li key={index.id}>
          {index.Email}
        </li>
      ))}
    </div>
  )
}

export default App
