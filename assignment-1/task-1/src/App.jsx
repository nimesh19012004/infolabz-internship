import React from "react"
import CustomCard from "./components/CustomCard"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let cardsDetail = {
    status: "now showing",
    imageURL:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt15392282%2F&psig=AOvVaw2lXSPj2BVPQEot2AKQLSvC&ust=1720537641110000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMD09ajcl4cDFQAAAAAdAAAAABAE",
    title: "Merry Cristmas",
    description:
      " Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    main1: "Vijay Setupathi",
    main2: "Katrina Kaif",
    movieGenre: "comedy,thrillar",
  };

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
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
      <CustomCard props={cardsDetail} />
    </div>
  );
}

export default App
