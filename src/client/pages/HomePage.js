import React from "react";

const Home = () => {
  return (
    <div>
      <h4>Press the button below</h4>
      <button onClick={() => console.log("I was pressed")}>Click me</button>
    </div>
  );
};

export default Home;
