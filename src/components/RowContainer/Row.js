import React from "react";
import Cell from "./Cell";

const Row = (props) => {
  const cols = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-row items-center justify-center">
      {cols.map((item, index) => (
        <Cell rowId={props.id} key={index} id={index} />
      ))}
    </div>
  );
};

export default Row;
