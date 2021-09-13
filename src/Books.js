import React from "react";
import { Spring, animated } from "react-spring";
import "./App.css";

const Books = () => {
  const list = [
    {
      name: "Clean code",
      rating: "4.5/5",
    },
    {
      name: "CPP Programming",
      rating: "4/5",
    },
  ];
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -300 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="books">
            {list.map((doc, i) => {
              return (
                <div key={i} className="block">
                  <h4>{doc.name}</h4>
                  <p>{doc.rating}</p>
                </div>
              );
            })}
          </div>
        </animated.div>
      )}
    </Spring>
  );
};

export default Books;
