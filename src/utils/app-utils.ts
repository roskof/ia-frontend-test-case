import axios from 'axios'
import messages_en from '@/locales/en.json'
import messages_tr from '@/locales/tr.json'

export const axiosInstance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: import.meta.env.VITE_OMDB_API_KEY
  }
})

export const translations: Record<string, Record<string, string>> = {
  en: messages_en,
  tr: messages_tr
}
