import React from "react"
import CustomCard from "./components/CustomCard"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let cardsDetail = {
    status: "now showing",
    imageURL:
      "https://images.news18.com/ibnlive/uploads/2023/11/merry-christmas-new-release-date-2023-11-0dba3e638d74322d902a92d61870970c.jpg",
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
