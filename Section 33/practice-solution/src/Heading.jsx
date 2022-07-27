import React from "react";

//402 React Components
function Heading() {
  const d = new Date();
  const hour = d.getHours();
  let greenting = "";
  const customStyle = {
    color: ""
  };

  if (hour < 12) {
    greenting = "Good morning";
    customStyle.color = "red";
  } else if (hour < 18) {
    greenting = "Good afternoon";
    customStyle.color = "green";
  } else {
    greenting = "Good night";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greenting}
    </h1>
  );
}

export default Heading;
