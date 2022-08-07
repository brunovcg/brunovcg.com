import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import EN from './languages/en-US.json'
import PT from './languages/pt-BR.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en-US',
    debug: true,
    resources: {
      'en-US': { translation: EN },
      'pt-BR': { translation: PT }
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
