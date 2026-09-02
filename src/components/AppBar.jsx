import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const labels = {
  ko: { home: '홈', work: '작업', resume: '이력서', language: 'English' },
  en: { home: 'Home', work: 'Work', resume: 'Résumé', language: '한국어' },
}

export default function AppBar() {
  const { lang, toggle } = useLang()
  const t = labels[lang]

  return (
    <header className="site-header">
      <NavLink className="wordmark" to="/" aria-label="Changho Park — home">
        Changho Park
      </NavLink>
      <nav className="site-nav" aria-label="Main navigation">
        <NavLink to="/" end>{t.home}</NavLink>
        <NavLink to="/work">{t.work}</NavLink>
        <NavLink to="/resume">{t.resume}</NavLink>
        <a href="https://github.com/hoyaaaa" target="_blank" rel="noreferrer">GitHub</a>
        <button className="language-toggle" type="button" onClick={toggle} aria-label="Change language">
          {t.language}
        </button>
      </nav>
    </header>
  )
}
