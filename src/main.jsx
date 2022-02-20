import React    from 'react'
import ReactDOM from 'react-dom'

import App         from './App'
import CssBaseline from '@mui/material/CssBaseline';
import 'react-pro-sidebar/dist/css/styles.css';
import './resources/scss/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
