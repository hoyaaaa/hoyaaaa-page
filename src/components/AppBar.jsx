import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const labels = {
  ko: { home: '소개', work: '작업', resume: '이력서', language: 'EN' },
  en: { home: 'Index', work: 'Work', resume: 'Résumé', language: 'KO' },
}

export default function AppBar() {
  const { lang, toggle } = useLang()
  const t = labels[lang]

  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Changho Park — home">
        <span className="wordmark-mark">CP</span>
        <span className="wordmark-name">Changho Park</span>
      </NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>{t.home}</NavLink>
        <NavLink to="/work">{t.work}</NavLink>
        <NavLink to="/resume">{t.resume}</NavLink>
        <button className="language-toggle" type="button" onClick={toggle} aria-label="Change language">
          {t.language}
        </button>
      </nav>
    </header>
  )
}
