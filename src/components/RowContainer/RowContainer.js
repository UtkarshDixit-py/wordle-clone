import React from "react";
import Row from "./Row";

const RowContainer = () => {
  const rows = [1, 2, 3, 4, 5, 6];
  return (
    <div className="m-4">
      {rows.map((items, index) => (
        <Row key={index} id={index} />
      ))}
    </div>
  );
};

export default RowContainer;
