import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"
import * as Calculator from "./calculator";

const root = ReactDOM.createRoot(document.getElementById("root"));

//404. Javascript ES6 Import, Export and Modules Practice
ReactDOM.render(
  <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.multiply(2, 3)}</li>
    <li>{Calculator.subtract(7, 2)}</li>
    <li>{Calculator.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);


//402 React Components
root.render(<App />);

//400. React Styling
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
root.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greenting}
    </h1>
  </div>
);

//397. Javascript Expressions in JSX & ES6 Template
let name = "Kiet Phan";
const day= new Date();
root.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {day.getFullYear()}.</p>
  </div>
);

//395. JSX Code
root.render(
  <div>
    <h1>Hello</h1>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
  </div>
);
