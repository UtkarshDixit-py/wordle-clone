import React from "react";

const Key = (props) => {
  if (props.big) {
    return (
      <button
        // onClick={() => ()}
        style={{
          width: 65.4,
          height: 58,
          margin: 3,
          borderRadius: 3,
          display: "grid",
          placeItems: "center",
          fontSize: 15,
          backgroundColor: "#d3d6da",
          color: "black",
          fontFamily: "Arial",
          cursor: "pointer",
          border: 0,
          fontWeight: "bold",
        }}
      >
        {props.letter}
      </button>
    );
  }
  return (
    <button
    //   onClick={() => (props.letter)}
      style={{
        width: 43,
        height: 58,
        margin: 3,
        borderRadius: 3,
        display: "grid",
        placeItems: "center",
        fontSize: 15,
        backgroundColor: "#d3d6da",
        color: "black",
        fontFamily: "Arial",
        cursor: "pointer",
        border: 0,
        fontWeight: "bold",
      }}
    >
      {props.alphabet}
    </button>
  );
};

export default Key;
