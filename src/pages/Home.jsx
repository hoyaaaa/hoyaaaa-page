import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    title: '안녕하세요. Go 백엔드 개발자 박창호입니다.',
    intro: '현재 Unboxers에서 교육 운영 플랫폼의 서버를 개발하고 있습니다. 그전에는 삼성전자에서 Bixby 음성 인식 모델의 학습·배포 시스템과 분석 도구를 만들었습니다.',
    detail: '요즘은 로그인과 권한 관리, API 설계, PostgreSQL을 자주 다룹니다. 문제가 생기면 먼저 재현하고, 같은 문제가 다시 생기지 않도록 테스트를 남기는 편입니다.',
    resume: 'PDF 이력서 보기',
    experienceTitle: '경력',
    experience: [
      ['2024–현재', 'Unboxers Corp', 'Backend Engineer', 'Go로 교육 운영 플랫폼의 API를 만들고 있습니다. 로그인과 권한 관리, PostgreSQL 스키마, OpenAPI 문서를 주로 맡습니다.'],
      ['2019–2024', 'Samsung Electronics', 'Software Engineer, AI Development Group', 'Bixby 음성 인식 모델을 학습하고 배포하는 시스템과 성능을 분석하는 내부 도구를 만들었습니다.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'S-Voice 메타데이터를 분석하고 품질 지표를 시각화했습니다.'],
    ],
    workTitle: '공개 작업',
    workIntro: '회사 코드는 공개할 수 없어서, 여기에는 개인적으로 만든 것과 오픈소스 기여만 모았습니다. 필요해서 하나씩 만든 것들이라 분야는 꽤 제각각입니다.',
    allWork: '전체 작업 보기',
    filmTitle: '영화',
    filmBody: '일하지 않을 때는 영화를 자주 봅니다. 《Everything Everywhere All at Once》의 이 대사를 특히 좋아합니다.',
    filmSource: 'Everything Everywhere All at Once (2022)',
  },
  en: {
    title: 'Hello. I’m Changho Park, a backend engineer working with Go.',
    intro: 'I currently build the server for an education operations platform at Unboxers. Before that, I worked at Samsung on training and deployment systems for Bixby speech-recognition models and the tools used to analyze them.',
    detail: 'These days I spend most of my time on sign-in, permissions, APIs, and PostgreSQL. When something breaks, I reproduce it first and add a test so the same problem does not come back.',
    resume: 'View PDF résumé',
    experienceTitle: 'Experience',
    experience: [
      ['2024–present', 'Unboxers Corp', 'Backend Engineer', 'Building APIs for an education operations platform in Go, mainly working on sign-in, permissions, PostgreSQL schemas, and OpenAPI documentation.'],
      ['2019–2024', 'Samsung Electronics', 'Software Engineer, AI Development Group', 'Built systems that trained and deployed Bixby speech-recognition models, along with internal tools for analyzing model performance.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'Analyzed S-Voice metadata and visualized product quality metrics.'],
    ],
    workTitle: 'Public work',
    workIntro: 'I cannot share my company repositories, so this list contains personal projects and open-source contributions. They cover a few different areas because most began with something I needed myself.',
    allWork: 'See all work',
    filmTitle: 'Films',
    filmBody: 'I watch a lot of films outside work. This is one line from Everything Everywhere All at Once that has stayed with me.',
    filmSource: 'Everything Everywhere All at Once (2022)',
  },
}

const featured = [
  {
    title: 'nsfw_detector_flutter', stack: 'Flutter · TensorFlow Lite',
    ko: 'Flutter 앱에서 이미지를 서버로 보내지 않고 분류하려고 만든 패키지입니다.',
    en: 'A Flutter package I made to classify images without sending them to a server.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    title: 'trackpoint-daemon-macos', stack: 'Objective-C · macOS HID',
    ko: 'ThinkPad TrackPoint 키보드를 맥에서도 제대로 쓰려고 만든 메뉴 막대 도구입니다.',
    en: 'A menu-bar utility I made to use my TrackPoint keyboard properly on a Mac.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    title: 'AoE2DE Font Mod', stack: 'Python · FreeType · DDS',
    ko: 'macOS용 Age of Empires II의 한글 폰트 문제를 고치려고 만든 도구입니다.',
    en: 'A tool I made to fix Korean font rendering in Age of Empires II on macOS.',
    url: 'https://github.com/hoyaaaa/aoe2de-font-mod',
  },
]

export default function Home() {
  const { lang } = useLang()
  const t = copy[lang]

  return (
    <div className="document home-page">
      <section className="intro">
        <h1>{t.title}</h1>
        <div className="intro-copy"><p>{t.intro}</p><p>{t.detail}</p></div>
        <Link className="text-link" to="/resume">{t.resume} <span aria-hidden="true">→</span></Link>
      </section>

      <section className="content-section">
        <h2>{t.experienceTitle}</h2>
        <div className="experience-list">
          {t.experience.map(([date, company, role, body]) => (
            <article className="experience-item" key={`${date}-${company}`}>
              <time>{date}</time>
              <div><h3>{company}</h3><p className="role">{role}</p><p>{body}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-title-row"><h2>{t.workTitle}</h2><Link className="text-link small" to="/work">{t.allWork} →</Link></div>
        <p className="section-intro">{t.workIntro}</p>
        <div className="project-list">
          {featured.map((item) => (
            <a href={item.url} target="_blank" rel="noreferrer" key={item.title}>
              <div className="project-heading"><h3>{item.title}</h3><span>{item.stack}</span></div>
              <p>{item[lang]}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="content-section film-note">
        <h2>{t.filmTitle}</h2>
        <p>{t.filmBody}</p>
        <blockquote><p>“Please, be kind. Especially when we don’t know what’s going on.”</p><cite>{t.filmSource}</cite></blockquote>
      </section>
    </div>
  )
}
