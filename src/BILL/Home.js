import React, { useState, useEffect } from "react";
//import { Card, Image} from "antd";
import "./../App.css";

function Home() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="home">
      <p>
        GO TO{" "}
        <span style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}>
          BILL PAGE
        </span>
      </p>
      <h2
        id="count"
        style={{
          marginTop: "150px",
          fontSize: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}

export default Home;
