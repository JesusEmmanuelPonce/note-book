import React from 'react'

import User        from '../../resources/icons/User';
import CustomInput from "../../components/CustomInput";
import DrawnBack   from "../../resources/img/register/drawm-image-back.png"
import DrawnFront   from "../../resources/img/register/drawm-image-front.png"
import "./styles.scss";

const Register = ({
  delegations: {
    onSubmit,
    errors,
    register,
    handleSubmit,
  }
}) => {
  return (
    <section id="register" className="wrap-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Correo eléctronico</label>
        <CustomInput
          iconLeft={<User />}
          validate={{...register("email", { required: true })}}
        />
        {errors.email && <span>This field is required</span>}
        <label>Nombre</label>
        <CustomInput
          iconLeft={<User />}
          validate={{...register("name", { required: true })}}
        />
        {errors.name && <span>This field is required</span>}
        <label>Contraseña</label>
        <CustomInput
          password
          validate={{...register("password", { required: true })}}
        />
        {errors.password && <span>This field is required</span>}
        <label>Repetir contraseña</label>
        <CustomInput
          password
          validate={{...register("repeatPassword", { required: true })}}
        />
        {errors.repeatPassword && <span>This field is required</span>}
        <button type="submit">
          Registrarse
        </button>
        <img src={DrawnFront} className="drawnFront" alt="" />
        <img src={DrawnBack}  className="drawnBack" alt="" />
      </form>
    </section>
  )
}

export default Register