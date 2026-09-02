import { useLang } from '../context/LanguageContext'

const copy = {
  ko: {
    title: '공개 작업',
    intro: '회사 코드는 공개할 수 없어서 개인 프로젝트와 오픈소스 기여만 정리했습니다. TrackPoint 키보드를 맥에서 제대로 쓰고 싶어서 만든 도구처럼, 대부분 제가 직접 겪은 불편에서 시작했습니다.',
    privateNote: '현재 회사에서는 Go로 서버를 개발하고 있습니다.',
    source: '저장소 보기',
  },
  en: {
    title: 'Public work',
    intro: 'I cannot share my company repositories, so this page lists personal projects and open-source contributions. Most began with something that bothered me, like wanting my TrackPoint keyboard to work properly on a Mac.',
    privateNote: 'At work, I currently build servers in Go.',
    source: 'View repository',
  },
}

const projects = [
  {
    year: '2026', title: 'nsfw_detector_flutter', stack: 'Dart · Flutter · TensorFlow Lite',
    ko: 'Flutter 앱에서 이미지를 서버로 보내지 않고 분류하려고 만든 패키지입니다. isolate 실행, GPU 실패 시 CPU 전환, 배치 처리를 지원합니다.',
    en: 'A Flutter package I made to classify images without sending them to a server. It supports isolate execution, GPU-to-CPU fallback, and batching.',
    url: 'https://github.com/hoyaaaa/nsfw_detector_flutter',
  },
  {
    year: '2026', title: 'trackpoint-daemon-macos', stack: 'Objective-C · CGEventTap · IOHID',
    ko: 'ThinkPad TrackPoint Keyboard II를 맥에서도 제대로 쓰려고 만들었습니다. 중간 버튼 스크롤, 키 재매핑, 포인터 감도와 가속을 조절할 수 있습니다.',
    en: 'I made this to use the ThinkPad TrackPoint Keyboard II properly on a Mac. It handles middle-button scrolling, key remapping, sensitivity, and acceleration.',
    url: 'https://github.com/hoyaaaa/trackpoint-daemon-macos',
  },
  {
    year: '2026', title: 'AoE2DE Font Mod', stack: 'Python · FreeType · DDS',
    ko: 'macOS용 Age of Empires II에서 한글 폰트가 제대로 나오지 않아 만든 도구입니다. 게임의 코드포인트를 읽고 글리프와 텍스처 아틀라스를 다시 만듭니다.',
    en: 'A tool I made after Korean fonts failed to render properly in Age of Empires II on macOS. It rebuilds glyphs and texture atlases from the game’s codepoint map.',
    url: 'https://github.com/hoyaaaa/aoe2de-font-mod',
  },
  {
    year: '2026', title: 'pgschema contribution', stack: 'Go · PostgreSQL',
    ko: 'pgschema에서 임시 스키마 이름을 바꾼 뒤 뷰 정의가 달라지는 문제를 고쳤습니다. 수정한 코드는 upstream에 반영됐습니다.',
    en: 'Fixed an issue in pgschema where view definitions changed after a temporary schema rename. The patch was accepted upstream.',
    url: 'https://github.com/pgplex/pgschema/pull/520',
  },
  {
    year: '2024', title: 'Vaultwarden on Fly.io', stack: 'Docker · Fly.io · Google Cloud Storage',
    ko: 'Vaultwarden을 Fly.io에 올리고 Google Cloud Storage에 데이터와 백업을 보관하는 과정을 한국어와 영어로 정리했습니다.',
    en: 'A Korean and English guide to running Vaultwarden on Fly.io and storing its data and backups in Google Cloud Storage.',
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
