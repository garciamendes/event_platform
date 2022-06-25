// React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Thrid party
import '@vime/core/themes/default.css'
import '@vime/core/themes/light.css'

// Local
import './styles/global.css'
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
