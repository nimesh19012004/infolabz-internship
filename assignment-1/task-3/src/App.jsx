import React, { useEffect, useState } from "react"
import CustomCard from "./components/CustomCard"
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
const [cardData,setCardData]=useState([]);


  useEffect(()=>{
    async function fetchData() {
      try {
        const res = await fetch(`https://inshorts.vercel.app/news/top`);
        const ans = await res.json();
        const data = ans.data.articles;

        setCardData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[])

  return (
    <div
      style={{
        margin: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        marginLeft: "80px",
      }}
    >

    {
      cardData.length>0? (
        cardData.map((value,index)=>{
            return (
              <CustomCard
                props={{
                  status: value.categoryNames[0],
                  imageURL: value.imageUrl,
                  title:value.title,
                  description:value.Content,
                  movieGenre:`Author Name:${value.authorName}`,
                }}
              />
            );
        })
      ):"nothing to display"
    }
    </div>
  );
}

export default App
