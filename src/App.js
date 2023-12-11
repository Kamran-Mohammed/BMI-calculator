import React, { useState } from "react";
import { Button } from "react-bootstrap";

const App = () => {
  const [clas, setClass] = useState();
  return (
    <>
      <h1>BMI Calculator</h1>
      <Form />
    </>
  );
};

// function handlechange(event) {
//   console.log(event.target.className);
// }

// function handlechange(event) {
//   console.log(event.target.innerHTML);
//   var k = document.getElementById("form");
//   k.classList.toggle("colorbtn");
//   //k.classList.add("curs");
// }
const Form = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [noValue, setNoValue] = useState("");
  var [color, setcolor] = useState("red");
  var [font, setfont] = useState("curs");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      setNoValue(1);
      return;
    }
    setNoValue("");
    const height_m = height / 100;
    const height_sq = height_m * height_m;
    const big_Bmi = weight / height_sq;
    const c_bmi = big_Bmi * 100;
    const round_bmi = Math.round(c_bmi);
    setBmi(round_bmi / 100);
    setWeight(0);
    setHeight(0);
  };

  const BmiResult = () => {
    return (
      <>
        <div className="container">
          <h3>Your BMI is : </h3>
          <h3 className="result">{bmi}</h3>
          <BmiMessage />
        </div>
        <h3>BMI chart :</h3>
        <h4>less than 16.0 : severely underwieght</h4>
        <h4>16.0 - 18.4 : underwieght</h4>
        <h4>18.5 - 24.9 : normal</h4>
        <h4>25.0 - 29.9 : overweight</h4>
        <h4>more than 30.0 : obese</h4>
      </>
    );
  };

  const BmiMessage = () => {
    if (bmi < 16) {
      return <h3>acha khaoo</h3>;
    }
    if (bmi >= 16.0 && bmi < 18.5) {
      return <h3>gym ku jaoo</h3>;
    }
    if (bmi >= 18.5 && bmi < 25.0) {
      return <h3>sahi jaare. Keep it up!</h3>;
    }
    if (bmi >= 25.0 && bmi < 30.0) {
      return <h3>dieting karoo</h3>;
    }
    if (bmi >= 30.0) {
      return <h3>cardio karoo</h3>;
    }
  };

  const Modal = () => {
    return <h4 className="no-value">Please enter all values</h4>;
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form" id="form">
        <div>
          <label htmlFor="weight">Weight(kg) : </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="height">Height(cm) : </label>
          <input
            style={{ marginTop: "0.25rem" }}
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        {noValue && <Modal />}
        <button type="submit" className={`btn ${color} ${font}`}>
          Get BMI
        </button>
        {/* <button className="btn" onClick={handlechange}>
          Change
        </button>
        <button className="btn" onClick={handlechange}>
          remove
        </button> */}
        {/* <Button variant="primary">primary</Button> */}
        {/* <button>
          <a href="">link</a>
        </button>
        <p>
          this is a <a href="">link</a>
        </p> */}
      </form>
      {bmi && <BmiResult />}
    </>
  );
};

export default App;
