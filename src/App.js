import React, { useState } from "react";
import Books from "./Books";
import Fiction from "./fiction";
import Music from "./Music";
import Travel from "./Travel";
import books from "./books.jpg";
import "./App.css";

function App() {
  const [active, setActive] = useState("1");

  const handleClick = (e) => {
    if (e === "1") {
      console.log("Books");
      setActive("1");
    }
    if (e === "2") {
      console.log("Fiction");
      setActive("2");
    }
    if (e === "3") {
      console.log("Music");
      setActive("3");
    }
    if (e === "4") {
      console.log("Travel");
      setActive("4");
    }
  };
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <img
            src={books}
            alt=""
            style={{
              width: "100px",
            }}
          />{" "}
          GoodBooks
        </h1>
        <p>Checkout my favorite books. Select a genre to get started</p>
      </div>
      <button
        onClick={() => handleClick("1")}
        className={active === "1" ? "button active" : "button"}
      >
        Programming
      </button>
      <button
        onClick={() => handleClick("2")}
        className={active === "2" ? "button active" : "button"}
      >
        Fiction
      </button>
      <button
        onClick={() => handleClick("3")}
        className={active === "3" ? "button active" : "button"}
      >
        Music
      </button>
      <button
        onClick={() => handleClick("4")}
        className={active === "4" ? "button active" : "button"}
      >
        Travel
      </button>
      <hr />
      <div>
        {active === "1" ? (
          <Books />
        ) : active === "2" ? (
          <Fiction />
        ) : active === "3" ? (
          <Music />
        ) : (
          <Travel />
        )}
      </div>
    </div>
  );
}

export default App;
