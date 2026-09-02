import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Changho Park</p>
      <p>{lang === 'ko' ? '서울에서 만들고 운영합니다.' : 'Built and operated from Seoul.'}</p>
      <div className="footer-links">
        <a href="https://github.com/hoyaaaa" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/hoyaaaa/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:hoya.develop@gmail.com">Email</a>
      </div>
    </footer>
  )
}
