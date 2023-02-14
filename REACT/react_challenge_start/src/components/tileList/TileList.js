import React from "react";
import { Tile } from "../tile/Tile";
export const TileList = (props) => {
  const { data } = props;
  return (
    <div>
      {data.map((data, i) => {
        return <Tile data={data} key={i}></Tile>;
      })}
    </div>
  );
};
