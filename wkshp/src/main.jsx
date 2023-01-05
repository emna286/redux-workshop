import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider}from 'react-redux'
import magasin from './store/store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={magasin}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
