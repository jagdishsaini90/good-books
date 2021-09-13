import React from "react";
import { Spring, animated } from "react-spring";
import "./App.css";

const Fiction = () => {
  const list = [
    {
      name: "Harry Potter and Goblet of fire",
      rating: "4.5/5",
    },
    {
      name: "Fifty shades of grey",
      rating: "5/5",
    },
  ];
  return (
    <Spring
      from={{ opacity: 0, marginTop: -100 }}
      to={{ opacity: 1, marginTop : 0 }}
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

export default Fiction;
