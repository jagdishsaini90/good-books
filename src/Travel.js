import React from "react";
import { Spring, animated } from "react-spring";
import "./App.css";

const Travel = () => {
  const list = [
    {
      name: "Taj Mahal",
      rating: "4.5/5",
    },
    {
      name: "Dehradun",
      rating: "4/5",
    },
  ];
  return (
    <Spring
      from={{ opacity: 0}}
      to={{ opacity: 1}}
    >
      {(props) => (
        <animated.div style={props}>
          <div>
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

export default Travel;
