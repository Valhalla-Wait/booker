import { createRoot } from 'react-dom/client'
import * as React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
