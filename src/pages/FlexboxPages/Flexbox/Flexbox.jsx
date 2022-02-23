import React, { useState } from 'react';

import Flexbox from "../../../resources/img/code/flex.svg";
import "./styles.scss";

const Pseudoclasses = () => {

  const [flex, setFlex] = useState({
    display: "flex",
    justifyContent: "",
    alignItems: "",
    flexDirection: "row",
  });

  return (
    <section className="flexbox">
      <h2>
        Flexbox
      </h2>
      <p>
        El Módulo de Caja Flexible, comúnmente llamado flexbox, fue diseñado como un modelo unidimensional de layout, y como un método que pueda ayudar a distribuir el espacio entre los ítems de una interfaz y mejorar las capacidades de alineación.
      </p>
      <h3>¿Como funciona?</h3>
      <p>
        Para empezar a utilizar flexbox lo primero que debemos hacer es conocer algunos de los elementos básicos de este nuevo esquema, que son los siguientes:
      </p>
      <img src={Flexbox} alt="" />
      <p>
        El eje principal está definido por la propiedad flex-direction <strong>(main axis)</strong> y el eje cruzado es perpendicular a este <strong>(cross axis)</strong>.
      </p>

      <div className="flexbox__wrapBtn">
        <p><strong>Flex direction</strong></p>
        <button
          type="button"
          onClick={() => setFlex({...flex, flexDirection: "row" })}
          className={flex.flexDirection === "row" ? "active" : ""}
        >
          row
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, flexDirection: "row-reverse" })}
          className={flex.flexDirection === "row-reverse" ? "active" : ""}
        >
          row reverse
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, flexDirection: "column" })}
          className={flex.flexDirection === "column" ? "active" : ""}
        >
          column
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, flexDirection: "column-reverse" })}
          className={flex.flexDirection === "column-reverse" ? "active" : ""}
        >
          column reverse
        </button>
      </div>

      <div className="flexbox__wrapBtn">
        <p><strong>Justify content</strong></p>
        <button
          type="button"
          onClick={() => setFlex({...flex,  justifyContent: "space-between"})}
          className={flex.justifyContent === "space-between" ? "active" : ""}
        >
          space between
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex,  justifyContent: "space-around"})}
          className={flex.justifyContent === "space-around" ? "active" : ""}
        >
          space around
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, justifyContent: "space-evenly"})}
          className={flex.justifyContent === "space-evenly" ? "active" : ""}
        >
          space evenly
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex,  justifyContent: "center"})}
          className={flex.justifyContent === "center" ? "active" : ""}
        >
          center
        </button>
      </div>

      <div className="flexbox__wrapBtn">
        <p><strong>Align items</strong></p>
        <button
          type="button"
          onClick={() => setFlex({...flex,  alignItems: "flex-start"})}
          className={flex.alignItems === "flex-start" ? "active" : ""}
        >
          flex start
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, alignItems: "flex-end"})}
          className={flex.alignItems === "flex-end" ? "active" : ""}
        >
          flex end
        </button>
        <button
          type="button"
          onClick={() => setFlex({...flex, alignItems: "center"})}
          className={flex.alignItems === "center" ? "active" : ""}
        >
          center
        </button>
      </div>

      <div style={flex} className="flexbox__example">
        <div className="flexbox__example-box1"></div>
        <div className="flexbox__example-box2"></div>
        <div className="flexbox__example-box3"></div>
      </div>
    </section>

  )
}

export default Pseudoclasses;