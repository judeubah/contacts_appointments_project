import React from "react";

export const Tile = ({data_item, key_}) => {

  return (
    <div  className="tile-container">
      {Object.values(data_item).map((item, index)=>(
        <p key={index} className={index === 0 ? "tile-tile" : 'tile'}>{item}</p>
      ))}
    </div>
  );
};
