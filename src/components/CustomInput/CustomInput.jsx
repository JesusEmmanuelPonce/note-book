import React, { useState } from 'react'

import Eye      from "../../resources/icons/Eye";
import EyeClose from "../../resources/icons/EyeClose";
import "./styles.scss";

const CustomInput = ({
    iconLeft,
    password,
    validate,
    ...rest
}) => {

  const [pass, setPass] = useState(password);

  return (
    <div id="customInput">
      <span className="iconLeft">
        { iconLeft }
      </span>
      <input
        type={pass ? "password" : "text"}
        className={password ? "pl-zero" : ""}
        {...validate}
        {...rest}
      />
      { password ?
        <span
          onClick={() => setPass(!pass)}
          className="iconRight"
        >
          { pass ? <EyeClose /> : <Eye /> }
        </span>
        : null
      }
    </div>
  )
}

export default CustomInput