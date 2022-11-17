import React from "react";
import {Tile} from '../tile/Tile'
export const TileList = ({data}) => {
  return (
    <div key={Math.random() * 999}>
      {data.map((data_item, index)=>(
        <Tile key_={index} data_item={data_item}/>
      ))}
    </div>
  );
};
