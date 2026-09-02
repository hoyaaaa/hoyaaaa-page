import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('hoya-lang') || 'ko')

  useEffect(() => {
    localStorage.setItem('hoya-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((current) => current === 'ko' ? 'en' : 'ko')

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLang must be used inside LanguageProvider')
  return context
}
