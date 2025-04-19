import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { messages_en, messages_vi } from './index'

const messages = {
  en: messages_en,
  vi: messages_vi
}
const lang = localStorage.getItem('language') || 'vi'
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: lang,
  resources: {
    vi: {
      translation: messages.vi
    },
    en: {
      translation: messages.en
    }
  },
  fallbackLng: lang
})

export default i18next
