import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Changho Park · {lang === 'ko' ? '서울' : 'Seoul'}</p>
      <div className="footer-links">
        <a href="https://github.com/hoyaaaa" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/hoyaaaa/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hoya.develop@gmail.com">Email</a>
      </div>
    </footer>
  )
}
