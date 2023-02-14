import React from "react";

export const Tile = (props) => {
  const { data } = props;
  const info = Object.values(data);
  return (
    <div className="tile-container">
      {info.map((element) => {
        return <p key={element}>{element} </p>;
      })}
    </div>
  );
};
