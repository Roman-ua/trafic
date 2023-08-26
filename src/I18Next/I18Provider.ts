import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ukr from './languages/ukr.ts'
import en from './languages/en.ts'

const resources = {
  en: {
    translation: en,
  },
  ukr: {
    translation: ukr,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  })
  .then()

export default i18n
