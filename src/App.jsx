import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './layouts/Auth';
import Dashboard from './layouts/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
