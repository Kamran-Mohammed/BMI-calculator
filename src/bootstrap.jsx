import React, { useState } from "react";

import "./boot.css";
import Dropdown from "react-bootstrap/Dropdown";
import darkmode from "./icons8-dark-mode-96.png";
import lightmode from "./newlightmode.png";
import allmode from "./circle-half-stroke-solid.svg";
function Boot() {
  const [mode, setMode] = useState(true);
  function handleMode() {
    setMode(!mode);
    if (mode) {
      document.body.style.color = "white";
      document.body.style.backgroundColor = "black";
      // document.img.style.backgroundColor = "white";
    } else {
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      // document.img.style.fill = "white";
    }
  }
  function handleChangeFontFamily(event) {
    setFontFamily(event.target.innerHTML);
  }
  function handlecolor(event) {
    setcolor(event.target.innerHTML);
  }

  function handlefontsize(event) {
    setFontSize(event.target.innerHTML);
  }

  function handleLinkColor(event) {
    var anchor = document.getElementsByTagName("a");
    anchor[0].syle.color(event.target.innerHML);
  }

  var [fontFamily, setFontFamily] = useState("");
  var [fontSize, setFontSize] = useState("");
  var [color, setcolor] = useState("");

  return (
    <div>
      <h2 className={`${fontFamily} ${fontSize} ${color}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
        blanditiis quasi <a href="">commodi</a> laboriosam? Expedita sed ipsum{" "}
        <a href="">distinctio</a>. Dolore soluta ipsum error! Commodi dolorem
        odit repudiandae mollitia perferendis animi <a href="">molestias</a> nam
        itaque facere adipisci quas corrupti, beatae repellat dolore harum,{" "}
        <a href="">consequuntur</a> exercitationem. Sit temporibus quaerat
        voluptatibus laudantium nostrum, provident cupiditate veniam.
      </h2>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-font-family">Font Family</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleChangeFontFamily}>
            cursive
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleChangeFontFamily}>
            inherit
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleChangeFontFamily}>
            monospace
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-font-size">Font Size</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handlefontsize}>
            large
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handlefontsize}>
            x-large
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handlefontsize}>
            xx-large
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-font-family">color</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handlecolor}>
            red
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handlecolor}>
            blue
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handlecolor}>
            green
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-font-family">link color</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleLinkColor}>
            red
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleLinkColor}>
            blue
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleLinkColor}>
            green
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <img
        src={mode ? darkmode : lightmode}
        style={{ width: "50px" }}
        alt=""
        onClick={handleMode}
      />
    </div>
  );
}

export default Boot;
