import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './layouts/auth';
import Dashboard from './layouts/dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Tags from './pages/htmlpages/Tags';
import Semantics from './pages/htmlpages/Semantics';
import Pseudoclasses from './pages/CssPages/Pseudoclasses';
import Selectors from './pages/CssPages/Selectors';
import Flexbox from './pages/FlexboxPages/Flexbox';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="html">
            <Route path="tags" element={<Tags />} />
            <Route path="semantics" element={<Semantics />} />
          </Route>
          <Route path="css">
            <Route path="selectors" element={<Selectors />} />
            <Route path="pseudoclasses" element={<Pseudoclasses />} />
          </Route>
          <Route path="flexbox" element={<Flexbox />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
