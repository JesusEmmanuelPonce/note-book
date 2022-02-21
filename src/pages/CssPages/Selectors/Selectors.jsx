import React from 'react'

import SelectorId    from "../../../resources/img/code/selector-id.png"
import SelectorTag   from "../../../resources/img/code/selector-tag.png"
import SelectorClass from "../../../resources/img/code/selector-class.png"
import "./styles.scss";

const Selectors = () => {
  return (
    <section id="selectors">
      <h2>Selectores CSS</h2>
      <p>
        Los selectores definen sobre qué elementos se aplicará un conjunto de reglas CSS.
      </p>
      <ul>
        <li>
          <h3>Selector de tipo</h3>
          <p>
            Selecciona todos los elementos que coinciden con el nombre del elemento especificado.
          </p>
          <img src={SelectorTag} alt="" />
        </li>
        <li>
          <h3>Selector de clase</h3>
          <p>
            Selecciona todos los elementos que coinciden con el nombre del elemento especificado.
          </p>
          <img src={SelectorClass} alt="" />
        </li>
        <li>
          <h3>Selector de ID</h3>
          <p>
            Selecciona un elemento basándose en el valor de su atributo id. Solo puede haber un elemento con un determinado ID dentro de un documento.
          </p>
          <img src={SelectorId} alt="" />
        </li>
        <li>
          <h3>Selector universal</h3>
          <p>
            Selecciona todos los elementos. Opcionalmente, puede estar restringido a un espacio de nombre específico o a todos los espacios de nombres.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Selectors;
