import React from 'react'
import { useForm } from 'react-hook-form';

import Register from './Register';

const RegisterContainer = () => {

    const { register, handleSubmit, formState: { errors } } = useForm ();
    const onSubmit = data => console.log(data);

  return (
    <Register
        delegations={{
            onSubmit,
            errors,
            register,
            handleSubmit,
        }}
    />
  )
}

export default RegisterContainer;