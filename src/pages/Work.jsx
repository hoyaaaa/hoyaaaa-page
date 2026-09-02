import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    eyebrow: 'PUBLIC WORK · SELECTED ARCHIVE',
    title: '일상의 불편을 코드로 해결한 기록.',
    lead: '모바일 ML부터 macOS 입력 장치, 게임 폰트, 데이터베이스 도구까지. 언어보다 문제에 맞는 구현을 선택합니다.',
    note: '회사에서 진행한 최근 Go 프로덕션 작업은 비공개 저장소에 있습니다. 아래는 공개할 수 있는 개인 작업과 오픈소스 기여를 선별한 목록입니다.',
  },
  en: {
    eyebrow: 'PUBLIC WORK · SELECTED ARCHIVE',
    title: 'Small frictions, resolved in code.',
    lead: 'From on-device ML to macOS input, game typography, and database tools—I choose the implementation that fits the problem.',
    note: 'Most of my recent production work in Go lives in private company repositories. These are selected personal projects and open-source contributions I can share publicly.',
  },
}

const projects = [
  {
    year: '2026', title: 'nsfw_detector_flutter', category: 'PACKAGE', stack: 'Dart · Flutter · TFLite',
    ko: '이미지가 기기 밖으로 나가지 않는 온디바이스 NSFW 분류 패키지입니다. 모델을 번들하고, isolate 실행과 GPU 실패 시 CPU 전환까지 런타임 경계를 단단하게 만들었습니다.',
    en: 'An on-device NSFW classifier where images never leave the device. The package bundles its model and hardens runtime boundaries with isolate execution and GPU-to-CPU fallback.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    year: '2026', title: 'trackpoint-daemon-macos', category: 'SYSTEM UTILITY', stack: 'Objective-C · CGEventTap · IOHID',
    ko: 'ThinkPad TrackPoint Keyboard II를 macOS답게 만드는 메뉴 막대 데몬입니다. 중간 버튼 스크롤, 키 재매핑, 감도와 가속 제어를 장치 연결 상태에 맞춰 적용합니다.',
    en: 'A menu-bar daemon that makes the ThinkPad TrackPoint Keyboard II feel native on macOS, covering middle-button scroll, key remapping, sensitivity, and acceleration.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    year: '2026', title: 'AoE2DE Font Mod', category: 'TOOLING', stack: 'Python · FreeType · DDS',
    ko: 'macOS용 Age of Empires II에서 한글 폰트를 사용할 수 있도록 원본 코드포인트를 읽고 글리프와 2048px 텍스처 아틀라스를 재생성합니다.',
    en: 'Rebuilds glyphs and 2048px texture atlases from the original codepoint map so Korean fonts render correctly in Age of Empires II on macOS.',
    url: 'https://github.com/hoyaaaa/aoe2de-font-mod',
  },
  {
    year: '2026', title: 'pgschema contribution', category: 'OPEN SOURCE', stack: 'Go · PostgreSQL',
    ko: '임시 스키마 이름 변경 이후 뷰 정의가 흔들리던 문제를 정규화하여 pgschema의 선언적 마이그레이션 계획이 안정적으로 생성되도록 수정했습니다.',
    en: 'Contributed a fix that normalizes views after temporary schema renames, keeping pgschema’s declarative migration plans stable.',
    url: 'https://github.com/pgplex/pgschema/pull/520',
  },
  {
    year: '2024', title: 'Vaultwarden on Fly.io', category: 'SELF-HOSTING', stack: 'Docker · Fly.io · GCS',
    ko: 'Vaultwarden을 Fly.io에 올리고 Google Cloud Storage를 영속 스토리지와 백업 경계로 연결하는 한·영 셀프호스팅 가이드입니다.',
    en: 'A bilingual guide for running Vaultwarden on Fly.io with Google Cloud Storage as a persistence and backup boundary.',
    url: 'https://github.com/hoyaaaa/vaultwarden-free-selfhosted',
  },
  {
    year: '2021', title: '#실시간 검색어', category: 'ARCHIVE', stack: 'React · FastAPI · MySQL',
    ko: '여러 포털의 실시간 검색어를 새 탭에서 보여주던 Chrome 확장 프로그램입니다. API부터 인터페이스와 배포까지 혼자 만들고 운영했습니다.',
    en: 'A Chrome extension that surfaced trending searches from multiple portals on every new tab, built and operated end to end.',
    url: 'https://github.com/hoyaaaa/realtime-trends-web',
  },
]

export default function Work() {
  const { lang } = useLang()
  const t = copy[lang]
  return (
    <div className="subpage">
      <header className="subpage-hero page-grid">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.lead}</p>
      </header>
      <section className="work-archive page-grid">
        <p className="archive-note">{t.note}</p>
        <div className="work-list">
          {projects.map((project, index) => (
            <a className="work-row detailed" href={project.url} target="_blank" rel="noreferrer" key={project.title}>
              <span className="work-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="work-main">
                <p className="work-meta">{project.year} · {project.category}</p>
                <h2>{project.title}</h2>
                <p>{project[lang]}</p>
              </div>
              <span className="work-kind">{project.stack}</span>
              <span className="work-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
