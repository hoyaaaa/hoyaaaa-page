import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    eyebrow: 'BACKEND ENGINEER · SEOUL',
    titleA: '화면 뒤의 시스템을',
    titleB: '만들고 운영합니다.',
    intro: 'Go로 프로덕션 서버를 만드는 백엔드 엔지니어 박창호입니다. 인증과 권한, API 계약, 데이터 경계처럼 정확해야 하는 부분을 주로 다룹니다.',
    viewWork: '작업 보기',
    openResume: 'PDF 이력서',
    principlesTitle: 'Engineering, in practice',
    principlesLead: '모호한 요구를 명시적인 계약으로, 운영 문제를 재현 가능한 테스트로 바꾸는 일을 좋아합니다.',
    principles: [
      ['01', 'Access control', '역할과 스코프, 토큰, 감사 로그를 하나의 일관된 권한 모델로 연결합니다.'],
      ['02', 'API contracts', 'OpenAPI, 멱등성, 버전 경계를 활용해 클라이언트와 서버가 안전하게 진화하도록 만듭니다.'],
      ['03', 'Reliable data', 'PostgreSQL을 중심으로 정합성, 스키마 변화, 실패 시나리오를 함께 설계합니다.'],
      ['04', 'Production', '관측 가능한 지표와 작은 롤아웃, 되돌릴 수 있는 변경을 기본값으로 둡니다.'],
    ],
    experienceTitle: 'Experience',
    experience: [
      ['2024 — NOW', 'Unboxers Corp', 'Backend Engineer', 'Go 기반 교육 운영 플랫폼의 서버, 인증·권한 체계, 데이터 및 웹 클라이언트 계약을 개발하고 운영합니다.'],
      ['2019 — 2024', 'Samsung Electronics', 'Software Engineer · AI Development Group', 'Bixby 음성 인식 모델의 학습·배포 파이프라인과 품질 분석 시스템, 대규모 데이터 처리 도구를 만들었습니다.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'S-Voice 메타데이터를 분석하고 품질 지표를 시각화했습니다.'],
    ],
    selectedTitle: 'Selected work',
    selectedLead: '업무 밖에서도 생활의 작은 불편을 발견하면 직접 도구로 만듭니다.',
    allWork: '모든 작업 보기',
    filmLabel: 'One line I keep close · Everything Everywhere All at Once',
    filmQuote: 'Please, be kind. Especially when we don’t know what’s going on.',
    filmBody: '영화를 좋아합니다. 익숙한 세계를 조금 다르게 보게 만들고, 혼란 속에서도 사람을 놓치지 않는 이야기를 오래 기억합니다.',
  },
  en: {
    eyebrow: 'BACKEND ENGINEER · SEOUL',
    titleA: 'I build and operate',
    titleB: 'the systems behind the screen.',
    intro: 'I’m Changho Park, a backend engineer building production services in Go. I focus on the parts where correctness matters most: identity, authorization, API contracts, and data boundaries.',
    viewWork: 'View work',
    openResume: 'PDF résumé',
    principlesTitle: 'Engineering, in practice',
    principlesLead: 'I like turning ambiguous requirements into explicit contracts, and production incidents into reproducible tests.',
    principles: [
      ['01', 'Access control', 'Connecting roles, scopes, tokens, and audit trails into one coherent authorization model.'],
      ['02', 'API contracts', 'Using OpenAPI, idempotency, and version boundaries so clients and servers can evolve safely.'],
      ['03', 'Reliable data', 'Designing consistency, schema evolution, and failure scenarios around PostgreSQL.'],
      ['04', 'Production', 'Making observable metrics, bounded rollouts, and reversible changes the default.'],
    ],
    experienceTitle: 'Experience',
    experience: [
      ['2024 — NOW', 'Unboxers Corp', 'Backend Engineer', 'Building and operating Go services, identity and authorization systems, data contracts, and web-client boundaries for an education operations platform.'],
      ['2019 — 2024', 'Samsung Electronics', 'Software Engineer · AI Development Group', 'Built training and deployment pipelines for Bixby speech-recognition models, quality analytics systems, and large-scale data tooling.'],
      ['2015', 'Samsung Electronics', 'Software Engineering Intern', 'Analyzed S-Voice metadata and visualized product quality metrics.'],
    ],
    selectedTitle: 'Selected work',
    selectedLead: 'Away from work, I tend to turn small everyday frustrations into tools of my own.',
    allWork: 'See all work',
    filmLabel: 'One line I keep close · Everything Everywhere All at Once',
    filmQuote: 'Please, be kind. Especially when we don’t know what’s going on.',
    filmBody: 'I love films that shift the way I see a familiar world—and stories that do not lose sight of people, even in the middle of chaos.',
  },
}

const featured = [
  {
    index: '01',
    title: 'nsfw_detector_flutter',
    kind: 'Flutter · TensorFlow Lite',
    ko: '이미지를 외부 서버로 보내지 않고 기기 안에서 판별하는 Flutter 패키지. 백그라운드 isolate, GPU fallback, 배치 처리를 지원합니다.',
    en: 'On-device image classification for Flutter, with background isolates, GPU fallback, and batch processing—no image leaves the device.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    index: '02',
    title: 'trackpoint-daemon-macos',
    kind: 'Objective-C · macOS HID',
    ko: 'ThinkPad TrackPoint Keyboard II의 스크롤, 키 매핑, 감도를 macOS에서 자연스럽게 되살리는 메뉴 막대 데몬입니다.',
    en: 'A macOS menu-bar daemon that restores scrolling, key mapping, and pointer behavior for the ThinkPad TrackPoint Keyboard II.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    index: '03',
    title: 'AoE2DE Font Mod',
    kind: 'Python · Bitmap tooling',
    ko: 'macOS용 Age of Empires II에서 한글 폰트를 쓸 수 있도록 글리프를 렌더링하고 텍스처 아틀라스를 다시 만드는 도구입니다.',
    en: 'A tool that renders glyphs and rebuilds bitmap texture atlases to bring Korean fonts to Age of Empires II on macOS.',
    url: 'https://github.com/hoyaaaa/aoe2de-font-mod',
  },
]

export default function Home() {
  const { lang } = useLang()
  const t = copy[lang]

  return (
    <>
      <section className="hero page-grid">
        <div className="hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.titleA}<br /><em>{t.titleB}</em></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" to="/work">{t.viewWork}<span>↗</span></Link>
            <Link className="button button-light" to="/resume">{t.openResume}<span>↓</span></Link>
          </div>
        </div>
        <aside className="hero-card" aria-label="Profile note">
          <div className="portrait-monogram">C<span>P</span></div>
          <div className="hero-card-meta">
            <span>GO / POSTGRESQL / OPENAPI</span>
            <span>37.5665° N · 126.9780° E</span>
          </div>
        </aside>
      </section>

      <section className="section page-grid">
        <div className="section-kicker">01 / PRACTICE</div>
        <div className="section-content">
          <div className="section-heading">
            <h2>{t.principlesTitle}</h2>
            <p>{t.principlesLead}</p>
          </div>
          <div className="principle-grid">
            {t.principles.map(([index, title, body]) => (
              <article className="principle" key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark page-grid">
        <div className="section-kicker">02 / CAREER</div>
        <div className="section-content">
          <div className="section-heading"><h2>{t.experienceTitle}</h2></div>
          <div className="timeline">
            {t.experience.map(([date, company, role, body]) => (
              <article className="timeline-row" key={`${date}-${company}`}>
                <time>{date}</time>
                <div><h3>{company}</h3><p className="timeline-role">{role}</p></div>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-grid">
        <div className="section-kicker">03 / SELECTED</div>
        <div className="section-content">
          <div className="section-heading split-heading">
            <div><h2>{t.selectedTitle}</h2><p>{t.selectedLead}</p></div>
            <Link to="/work">{t.allWork} →</Link>
          </div>
          <div className="work-list compact">
            {featured.map((item) => (
              <a className="work-row" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
                <span className="work-index">{item.index}</span>
                <div><h3>{item.title}</h3><p>{item[lang]}</p></div>
                <span className="work-kind">{item.kind}</span>
                <span className="work-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="film-break">
        <div className="film-perforation" aria-hidden="true" />
        <div className="film-copy">
          <p>{t.filmLabel}</p>
          <blockquote>“{t.filmQuote}”</blockquote>
          <p className="film-body">{t.filmBody}</p>
        </div>
        <div className="film-perforation" aria-hidden="true" />
      </section>
    </>
  )
}
