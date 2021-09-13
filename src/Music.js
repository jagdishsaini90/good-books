import React from "react";
import { Spring, animated } from "react-spring";
import "./App.css";

const Music = () => {
  const list = [
    {
      name: "We Will Rock You",
      rating: "4.5/5",
    },
    {
      name: "Bawla by Badshah",
      rating: "4/5",
    },
  ];
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -200 }}
      to={{ opacity: 1, marginLeft: 0 }}
      
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

export default Music;
