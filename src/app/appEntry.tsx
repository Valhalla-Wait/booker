import { createRoot } from 'react-dom/client'
import * as React from 'react'
import { Provider } from 'react-redux'
import AppRouter from './appRouter'
import { BrowserRouter } from 'react-router-dom'
import { appStore } from './appStore'
import './../shared/base.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
