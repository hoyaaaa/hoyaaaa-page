import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    title: '안녕하세요. Go로 서버를 만들고 운영하는 박창호입니다.',
    intro: '서울에서 백엔드 엔지니어로 일하고 있습니다. 인증과 권한, API 계약, 데이터 정합성처럼 서비스의 기반이 되는 부분을 주로 다룹니다.',
    detail: '모호한 정책을 코드로 옮길 때 생기는 빈틈을 찾고, 운영 중 발견한 문제를 재현 가능한 테스트로 남기는 일을 좋아합니다. 필요하다면 웹 클라이언트와 배포 파이프라인까지 경계를 넘나듭니다.',
    currentLabel: '지금',
    current: 'Unboxers에서 교육 운영 플랫폼의 Go 백엔드를 개발하고 있습니다.',
    resume: 'PDF 이력서 보기',
    experienceTitle: '경력',
    experience: [
      ['2024–현재', 'Unboxers Corp', 'Backend Engineer', 'Go 기반 서비스와 인증·권한 체계, PostgreSQL 데이터 모델, OpenAPI 계약을 개발하고 운영합니다.'],
      ['2019–2024', 'Samsung Electronics', 'Software Engineer, AI Development Group', 'Bixby 음성 인식 모델의 학습·배포 파이프라인과 품질 분석 도구를 만들었습니다.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'S-Voice 메타데이터를 분석하고 품질 지표를 시각화했습니다.'],
    ],
    workTitle: '공개 작업',
    workIntro: '최근 회사 작업은 비공개 저장소에 있습니다. 아래는 업무 밖에서 만들거나 기여한 코드 중 몇 가지입니다.',
    allWork: '전체 작업 보기',
    filmTitle: '영화',
    filmBody: '영화를 좋아합니다. 익숙한 세계를 조금 다르게 보게 만드는 이야기, 그리고 혼란 속에서도 사람을 놓치지 않는 이야기를 오래 기억합니다.',
    filmSource: 'Everything Everywhere All at Once (2022)',
  },
  en: {
    title: 'Hello. I’m Changho Park, a backend engineer building and operating servers in Go.',
    intro: 'I work in Seoul, mostly on the foundations of production services: identity, authorization, API contracts, and data integrity.',
    detail: 'I like finding gaps when ambiguous policies become code, and turning production problems into reproducible tests. When a system boundary calls for it, I work across web clients and delivery pipelines too.',
    currentLabel: 'Now',
    current: 'Building the Go backend for an education operations platform at Unboxers.',
    resume: 'View PDF résumé',
    experienceTitle: 'Experience',
    experience: [
      ['2024–present', 'Unboxers Corp', 'Backend Engineer', 'Building and operating Go services, identity and authorization, PostgreSQL data models, and OpenAPI contracts.'],
      ['2019–2024', 'Samsung Electronics', 'Software Engineer, AI Development Group', 'Built training and deployment pipelines for Bixby speech-recognition models and tools for quality analysis.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'Analyzed S-Voice metadata and visualized product quality metrics.'],
    ],
    workTitle: 'Public work',
    workIntro: 'Most of my recent company work lives in private repositories. Here are a few things I have built or contributed to outside work.',
    allWork: 'See all work',
    filmTitle: 'Films',
    filmBody: 'I love films that make a familiar world look a little different, and stories that do not lose sight of people even in the middle of chaos.',
    filmSource: 'Everything Everywhere All at Once (2022)',
  },
}

const featured = [
  {
    title: 'nsfw_detector_flutter', stack: 'Flutter · TensorFlow Lite',
    ko: '이미지를 외부로 보내지 않고 기기 안에서 분류하는 Flutter 패키지입니다.',
    en: 'On-device image classification for Flutter; images never leave the device.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    title: 'trackpoint-daemon-macos', stack: 'Objective-C · macOS HID',
    ko: 'ThinkPad TrackPoint 키보드의 스크롤과 키 동작을 macOS에 맞게 고치는 메뉴 막대 도구입니다.',
    en: 'A menu-bar utility that makes TrackPoint scrolling and key behavior work naturally on macOS.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    title: 'AoE2DE Font Mod', stack: 'Python · FreeType · DDS',
    ko: 'macOS용 Age of Empires II에서 한글 폰트를 쓸 수 있도록 텍스처 아틀라스를 다시 만드는 도구입니다.',
    en: 'A tool that rebuilds texture atlases to bring Korean fonts to Age of Empires II on macOS.',
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
        <p className="current-note"><strong>{t.currentLabel}</strong>{t.current}</p>
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
