import React from 'react';
import { Outlet } from 'react-router-dom';

import "./styles.scss";

const Auth = () => {
  return (
    <section id="auth-layout">
        <Outlet />
    </section>
  )
}

export default Auth