import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { store } from './Store/Store.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </Provider>
)


