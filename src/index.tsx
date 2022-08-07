import React from 'react'
import ReactDOM from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import App from 'App/App'
import GlobalStyles from './styles/global'
import i18n from './locale/i18n'
import '@material/react-material-icon/dist/material-icon.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <GlobalStyles />
      <App />
    </I18nextProvider>
  </React.StrictMode>
)
