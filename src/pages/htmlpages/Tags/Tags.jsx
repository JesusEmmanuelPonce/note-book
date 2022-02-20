import React from 'react';

import HTMLIMG from "../../../resources/img/code/html.png"
import "./styles.scss";

const Tags = () => {
  return (
    <div id="tags">
        <p>
            Todos los documentos HTML deben comenzar con una declaración de tipo documento: <strong>{"<!DOCTYPE html>"}</strong>.
        </p>
        <p>
            El documento HTML en sí comienza con <strong>{"<html>"}</strong> y termina con <strong>{"</html>"}</strong>.
        </p>
        <p>
            La parte visible del documento HTML está entre <strong>{"<body>"}</strong> y <strong>{"</body>"}</strong>.
        </p>
        <p>
            Ejemplo:
        </p>
        <img
            src={HTMLIMG}
            alt="html"
            className="htmlImg"
        />
    </div>
  )
}

export default Tags