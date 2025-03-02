import React from "react";
import CardList from "./components/CardList/CardList";
import cardsData from "./data";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Галерея карток</h1>
      <CardList cards={cardsData} />
    </div>
  );
};

export default App;
