import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    title: '공개 작업',
    intro: '업무 밖에서 직접 만들었거나 오픈소스에 기여한 작업입니다. 언어나 프레임워크보다 당장 해결하고 싶은 문제에서 출발한 것들이 많습니다.',
    privateNote: '현재 진행 중인 Go 프로덕션 작업은 회사의 비공개 저장소에 있습니다.',
    source: '저장소 보기',
  },
  en: {
    title: 'Public work',
    intro: 'Things I have built outside work or contributed to in open source. Most started with a problem I wanted to solve, rather than a language or framework I wanted to use.',
    privateNote: 'My current production work in Go lives in private company repositories.',
    source: 'View repository',
  },
}

const projects = [
  {
    year: '2026', title: 'nsfw_detector_flutter', stack: 'Dart · Flutter · TensorFlow Lite',
    ko: '이미지가 기기 밖으로 나가지 않는 온디바이스 분류 패키지입니다. 모델을 번들하고 isolate 실행, GPU 실패 시 CPU 전환, 배치 처리를 지원합니다.',
    en: 'An on-device classifier where images never leave the device, with a bundled model, isolate execution, GPU-to-CPU fallback, and batch processing.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    year: '2026', title: 'trackpoint-daemon-macos', stack: 'Objective-C · CGEventTap · IOHID',
    ko: 'ThinkPad TrackPoint Keyboard II의 중간 버튼 스크롤, 키 재매핑, 포인터 감도와 가속을 macOS에 맞게 구현한 메뉴 막대 도구입니다.',
    en: 'A menu-bar utility for native-feeling middle-button scroll, key remapping, sensitivity, and acceleration on the ThinkPad TrackPoint Keyboard II.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    year: '2026', title: 'AoE2DE Font Mod', stack: 'Python · FreeType · DDS',
    ko: 'macOS용 Age of Empires II에서 한글 폰트를 사용할 수 있도록 코드포인트를 읽고 글리프와 텍스처 아틀라스를 다시 만듭니다.',
    en: 'Reads the game’s codepoint map and rebuilds glyphs and texture atlases so Korean fonts work in Age of Empires II on macOS.',
    url: 'https://github.com/hoyaaaa/aoe2de-font-mod',
  },
  {
    year: '2026', title: 'pgschema contribution', stack: 'Go · PostgreSQL',
    ko: '임시 스키마 이름 변경 뒤 뷰 정의가 달라지던 문제를 정규화해 선언적 마이그레이션 계획이 안정적으로 생성되도록 수정했습니다.',
    en: 'Contributed a fix that normalizes views after temporary schema renames, keeping declarative migration plans stable.',
    url: 'https://github.com/pgplex/pgschema/pull/520',
  },
  {
    year: '2024', title: 'Vaultwarden on Fly.io', stack: 'Docker · Fly.io · Google Cloud Storage',
    ko: 'Vaultwarden을 Fly.io에 올리고 Google Cloud Storage를 영속 스토리지와 백업에 사용하는 한·영 셀프호스팅 가이드입니다.',
    en: 'A bilingual guide to running Vaultwarden on Fly.io with Google Cloud Storage for persistence and backups.',
    url: 'https://github.com/hoyaaaa/vaultwarden-free-selfhosted',
  },
  {
    year: '2021', title: '#실시간 검색어', stack: 'React · FastAPI · MySQL',
    ko: '여러 포털의 실시간 검색어를 새 탭에 보여주던 Chrome 확장 프로그램입니다. API부터 화면과 배포까지 만들고 운영했습니다.',
    en: 'A Chrome extension that showed trending searches from several portals on every new tab, built and operated end to end.',
    url: 'https://github.com/hoyaaaa/realtime-trends-web',
  },
]

export default function Work() {
  const { lang } = useLang()
  const t = copy[lang]
  return (
    <div className="document work-page">
      <header className="page-intro">
        <h1>{t.title}</h1><p>{t.intro}</p><p className="quiet-note">{t.privateNote}</p>
      </header>
      <div className="archive-list">
        {projects.map((project) => (
          <article className="archive-item" key={project.title}>
            <time>{project.year}</time>
            <div>
              <h2><a href={project.url} target="_blank" rel="noreferrer">{project.title}</a></h2>
              <p className="stack">{project.stack}</p><p>{project[lang]}</p>
              <a className="text-link small" href={project.url} target="_blank" rel="noreferrer">{t.source} ↗</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
