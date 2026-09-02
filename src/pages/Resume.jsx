import { useEffect, useState } from 'react'
import { Document, Font, Link, Page, StyleSheet, Text, View, pdf } from '@react-pdf/renderer'
import { useLang } from '../context/LanguageContext'

Font.register({
  family: 'NotoSansKR',
  fonts: [
    { src: '/fonts/NotoSansKR-Regular.otf', fontWeight: 400 },
    { src: '/fonts/NotoSansKR-Bold.otf', fontWeight: 700 },
  ],
})

const C = { ink: '#171714', muted: '#67675f', line: '#d4d0c5', red: '#c53c2e', paper: '#faf8f2', soft: '#efede5' }
const s = StyleSheet.create({
  page: { fontFamily: 'NotoSansKR', fontSize: 8.8, color: C.ink, backgroundColor: C.paper, padding: '38 48 36' },
  topRule: { height: 4, backgroundColor: C.red, marginBottom: 18 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 18 },
  name: { fontSize: 28, fontWeight: 700, letterSpacing: -1.2 },
  nameEn: { fontSize: 10, color: C.muted, marginTop: 4, letterSpacing: 1.3 },
  headline: { width: 220, fontSize: 10.5, lineHeight: 1.5, textAlign: 'right', fontWeight: 700 },
  contact: { flexDirection: 'row', paddingVertical: 8, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, marginBottom: 18 },
  contactItem: { fontSize: 8, color: C.muted, marginRight: 16 },
  section: { marginBottom: 17 },
  sectionLabel: { color: C.red, fontSize: 7.5, fontWeight: 700, letterSpacing: 1.8, marginBottom: 9 },
  summary: { fontSize: 9.5, lineHeight: 1.6, color: '#383832' },
  experience: { paddingTop: 9, borderTop: `1px solid ${C.line}`, marginBottom: 11 },
  expTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 3 },
  expCompany: { fontSize: 12.5, fontWeight: 700 },
  expDate: { color: C.red, fontSize: 7.8, fontWeight: 700, letterSpacing: .7 },
  expRole: { color: C.muted, fontSize: 8.3, marginBottom: 6 },
  bullet: { flexDirection: 'row', marginBottom: 3, paddingRight: 8 },
  bulletMark: { width: 12, color: C.red, fontWeight: 700 },
  bulletText: { flex: 1, fontSize: 8.5, lineHeight: 1.42, color: '#363630' },
  tags: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 5 },
  tag: { fontSize: 7.2, color: '#4d4d47', backgroundColor: C.soft, padding: '3 6', marginRight: 4, marginBottom: 4 },
  twoCol: { flexDirection: 'row' },
  mainCol: { width: '65%', paddingRight: 26 },
  sideCol: { width: '35%', paddingLeft: 22, borderLeft: `1px solid ${C.line}` },
  skillGroup: { marginBottom: 13 },
  skillTitle: { fontSize: 8.4, fontWeight: 700, marginBottom: 4 },
  skillText: { fontSize: 8.3, lineHeight: 1.55, color: C.muted },
  project: { paddingVertical: 11, borderTop: `1px solid ${C.line}` },
  projectTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 },
  projectTitle: { fontSize: 11, fontWeight: 700 },
  projectType: { color: C.red, fontSize: 7.2, fontWeight: 700, letterSpacing: .8 },
  projectBody: { fontSize: 8.8, lineHeight: 1.55, color: '#41413b', marginBottom: 4 },
  projectLink: { fontSize: 7.5, color: C.muted, textDecoration: 'none' },
  edu: { marginBottom: 12 },
  eduTitle: { fontSize: 9.5, fontWeight: 700, marginBottom: 2 },
  eduSub: { fontSize: 8.2, lineHeight: 1.5, color: C.muted },
  philosophy: { padding: 14, backgroundColor: C.soft, marginTop: 8 },
  philosophyText: { fontSize: 9.2, lineHeight: 1.65 },
  footer: { position: 'absolute', left: 48, right: 48, bottom: 20, paddingTop: 6, borderTop: `1px solid ${C.line}`, flexDirection: 'row', justifyContent: 'space-between', color: C.muted, fontSize: 7 },
})

const content = {
  ko: {
    headline: 'Go Backend Engineer',
    about: '현재 Unboxers에서 Go로 교육 운영 플랫폼의 서버를 개발하고 있습니다. 로그인과 권한 관리, PostgreSQL 스키마, OpenAPI 문서를 주로 맡고 있으며 웹 클라이언트와 배포 과정도 함께 봅니다. 이전에는 삼성전자에서 Bixby 음성 인식 모델의 학습·배포 시스템과 품질 분석 도구를 만들었습니다.',
    section: { about: 'PROFILE', experience: 'EXPERIENCE', skills: 'SKILLS', projects: 'PUBLIC PROJECTS', education: 'EDUCATION & ACTIVITIES', principles: 'HOW I WORK' },
    experience: [
      {
        company: 'Unboxers Corp', role: 'Backend Engineer', date: '2024 — 현재',
        bullets: [
          '교육 운영 플랫폼의 Go API를 개발하고, 여러 웹 클라이언트가 함께 사용하는 요청·응답 스키마를 관리합니다.',
          '역할과 스코프에 따른 권한 검사를 구현하고 Bearer Token, 쿠키 로그인, 단기 Context Token의 인증 흐름을 정리했습니다.',
          'PostgreSQL 스키마와 OpenAPI 문서를 함께 관리하고, 기존 클라이언트가 깨지지 않도록 변경 사항을 단계적으로 배포합니다.',
          '동시에 들어온 같은 요청이 DB를 반복 조회하던 문제를 찾아 한 번의 조회를 공유하도록 수정하고 race·회귀 테스트를 추가했습니다.',
          'TypeScript 웹 클라이언트, E2E 테스트, Grafana 대시보드와 GitHub Actions도 서버 변경에 맞춰 함께 수정합니다.',
        ],
        tags: ['Go', 'PostgreSQL', 'OpenAPI', 'Supabase', 'Grafana', 'Docker', 'GitHub Actions'],
      },
      {
        company: 'Samsung Electronics', role: 'Software Engineer · AI Development Group', date: '2019 — 2024',
        bullets: [
          'Bixby 음성 인식 Language Model의 학습, 검증, 글로벌 배포 과정을 자동화했습니다.',
          '수억 건의 음성 데이터를 전처리하고 비동기로 분석하는 Python 파이프라인을 개발했습니다.',
          'WER, 인식률, 응답 시간을 버전별로 비교하는 내부 웹 도구와 실시간 KPI 대시보드를 만들었습니다.',
          '모델 상태를 모니터링하고 Jenkins·CircleCI로 학습과 배포를 실행하는 CI/CD 환경을 구축했습니다.',
        ],
        tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'TensorFlow', 'AWS', 'Jenkins', 'CircleCI'],
      },
      {
        company: 'Samsung Electronics', role: 'Software Engineering Intern · Voice Service', date: '2015',
        bullets: ['R과 Hadoop으로 S-Voice 메타데이터 품질 지표를 분석하고 시각화 보고서를 만들었습니다.'],
        tags: ['R', 'Hadoop'],
      },
    ],
    skills: [
      ['Backend', 'Go, Python, HTTP APIs, OpenAPI, authentication, authorization'],
      ['Data', 'PostgreSQL, MySQL, Redis, Supabase, schema migration, RLS'],
      ['Testing & Operations', 'Go race tests, E2E, Grafana, performance profiling, incident debugging'],
      ['Build & Delivery', 'Docker, GitHub Actions, Jenkins, CircleCI'],
      ['Client', 'TypeScript, React, Flutter'],
    ],
    projects: [
      ['nsfw_detector_flutter', 'FLUTTER PACKAGE · 2026', '이미지를 서버로 보내지 않고 기기에서 분류하는 패키지입니다. isolate 실행, GPU 실패 시 CPU 전환, 배치 처리와 회귀 테스트를 구현했습니다.', 'github.com/hoyaaaa/nsfw_detector_flutter'],
      ['trackpoint-daemon-macos', 'MACOS UTILITY · 2026', 'CGEventTap과 IOHID로 TrackPoint Keyboard II의 중간 버튼 스크롤, 키 재매핑, 포인터 감도와 가속을 구현했습니다.', 'github.com/hoyaaaa/trackpoint-daemon-macos'],
      ['AoE2DE Font Mod', 'PYTHON TOOL · 2026', 'macOS용 Age of Empires II의 한글 폰트 문제를 해결하기 위해 글리프를 렌더링하고 DDS 텍스처 아틀라스를 다시 만듭니다.', 'github.com/hoyaaaa/aoe2de-font-mod'],
      ['pgschema', 'OPEN SOURCE · 2026', '임시 스키마 이름 변경 뒤 PostgreSQL 뷰 정의가 달라지는 문제를 Go로 수정했으며, 패치가 upstream에 반영됐습니다.', 'github.com/pgplex/pgschema/pull/520'],
    ],
    education: [
      ['한양대학교', '컴퓨터공학부 · 2013 — 2019'],
      ['경남과학고등학교', '2011 — 2013'],
      ['Samsung SDS ICT Membership', 'sGen Club 개발자 트랙 · 2014 — 2015'],
    ],
    principles: '문제가 생기면 로그와 테스트로 먼저 재현합니다. 수정한 뒤에는 같은 문제가 다시 생기지 않도록 회귀 테스트를 남기고, 배포 후 지표까지 확인합니다.',
  },
  en: {
    headline: 'Go Backend Engineer',
    about: 'I currently build the server for an education operations platform at Unboxers in Go. My main areas are sign-in and permissions, PostgreSQL schemas, and OpenAPI documentation, and I also work on the web clients and delivery pipeline when needed. Previously, I built training and deployment systems and quality-analysis tools for Bixby speech-recognition models at Samsung.',
    section: { about: 'PROFILE', experience: 'EXPERIENCE', skills: 'SKILLS', projects: 'PUBLIC PROJECTS', education: 'EDUCATION & ACTIVITIES', principles: 'HOW I WORK' },
    experience: [
      { company: 'Unboxers Corp', role: 'Backend Engineer', date: '2024 — PRESENT', bullets: ['Build Go APIs and maintain request and response schemas shared by several web clients for an education operations platform.', 'Implemented role- and scope-based authorization and organized authentication flows for bearer tokens, cookie sessions, and short-lived context tokens.', 'Maintain PostgreSQL schemas and OpenAPI documentation together, rolling out changes in stages so existing clients continue to work.', 'Found repeated database reads from identical concurrent requests, changed them to share one read, and added race and regression tests.', 'Update TypeScript clients, E2E tests, Grafana dashboards, and GitHub Actions when a server change requires it.'], tags: ['Go', 'PostgreSQL', 'OpenAPI', 'Supabase', 'Grafana', 'Docker', 'GitHub Actions'] },
      { company: 'Samsung Electronics', role: 'Software Engineer · AI Development Group', date: '2019 — 2024', bullets: ['Automated training, validation, and global deployment for Bixby speech-recognition language models.', 'Built Python pipelines to preprocess and asynchronously analyze hundreds of millions of speech records.', 'Made internal web tools for comparing WER, recognition quality, and response times by model version, plus real-time KPI dashboards.', 'Set up model monitoring and CI/CD for training and deployment with Jenkins and CircleCI.'], tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'TensorFlow', 'AWS', 'Jenkins', 'CircleCI'] },
      { company: 'Samsung Electronics', role: 'Software Engineering Intern · Voice Service', date: '2015', bullets: ['Analyzed S-Voice metadata quality metrics with R and Hadoop and produced visualization reports.'], tags: ['R', 'Hadoop'] },
    ],
    skills: [
      ['Backend', 'Go, Python, HTTP APIs, OpenAPI, authentication, authorization'],
      ['Data', 'PostgreSQL, MySQL, Redis, Supabase, schema migration, RLS'],
      ['Testing & Operations', 'Go race tests, E2E, Grafana, performance profiling, incident debugging'],
      ['Build & Delivery', 'Docker, GitHub Actions, Jenkins, CircleCI'],
      ['Client', 'TypeScript, React, Flutter'],
    ],
    projects: [
      ['nsfw_detector_flutter', 'FLUTTER PACKAGE · 2026', 'Classifies images on the device without sending them to a server. Includes isolate execution, GPU-to-CPU fallback, batching, and regression tests.', 'github.com/hoyaaaa/nsfw_detector_flutter'],
      ['trackpoint-daemon-macos', 'MACOS UTILITY · 2026', 'Uses CGEventTap and IOHID to add middle-button scrolling, key remapping, pointer sensitivity, and acceleration for the TrackPoint Keyboard II.', 'github.com/hoyaaaa/trackpoint-daemon-macos'],
      ['AoE2DE Font Mod', 'PYTHON TOOL · 2026', 'Fixes Korean font rendering in Age of Empires II on macOS by rendering glyphs and rebuilding DDS texture atlases.', 'github.com/hoyaaaa/aoe2de-font-mod'],
      ['pgschema', 'OPEN SOURCE · 2026', 'Fixed PostgreSQL view definitions changing after a temporary schema rename. The Go patch was accepted upstream.', 'github.com/pgplex/pgschema/pull/520'],
    ],
    education: [['Hanyang University', 'B.S. in Computer Science & Engineering · 2013 — 2019'], ['Gyeongnam Science High School', '2011 — 2013'], ['Samsung SDS ICT Membership', 'sGen Club developer track · 2014 — 2015']],
    principles: 'When something breaks, I reproduce it with logs and a test first. After the fix, I leave a regression test and check the production metrics after deployment.',
  },
}

function Bullet({ children }) {
  return <View style={s.bullet}><Text style={s.bulletMark}>—</Text><Text style={s.bulletText}>{children}</Text></View>
}

function Tags({ items }) {
  return <View style={s.tags}>{items.map((item) => <Text key={item} style={s.tag}>{item}</Text>)}</View>
}

function Footer() {
  return (
    <View style={s.footer} fixed>
      <Text>CHANGHO PARK · BACKEND ENGINEER</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  )
}

function ResumeDoc({ lang }) {
  const t = content[lang]
  return (
    <Document title={`Changho Park — ${t.headline}`} author="Changho Park" subject="Backend Engineer Resume">
      <Page size="A4" style={s.page}>
        <View style={s.topRule} />
        <View style={s.header}>
          <View><Text style={s.name}>박창호</Text><Text style={s.nameEn}>CHANGHO PARK</Text></View>
          <Text style={s.headline}>{t.headline}</Text>
        </View>
        <View style={s.contact}>
          <Text style={s.contactItem}>Seoul, Korea</Text>
          <Text style={s.contactItem}>hoya.develop@gmail.com</Text>
          <Text style={s.contactItem}>github.com/hoyaaaa</Text>
          <Text style={s.contactItem}>linkedin.com/in/hoyaaaa</Text>
        </View>
        <View style={s.section}><Text style={s.sectionLabel}>{t.section.about}</Text><Text style={s.summary}>{t.about}</Text></View>
        <View style={s.section}>
          <Text style={s.sectionLabel}>{t.section.experience}</Text>
          {t.experience.map((exp) => (
            <View style={s.experience} key={`${exp.company}-${exp.date}`} wrap={false}>
              <View style={s.expTop}><Text style={s.expCompany}>{exp.company}</Text><Text style={s.expDate}>{exp.date}</Text></View>
              <Text style={s.expRole}>{exp.role}</Text>
              {exp.bullets.map((item) => <Bullet key={item}>{item}</Bullet>)}
              <Tags items={exp.tags} />
            </View>
          ))}
        </View>
        <Footer />
      </Page>

      <Page size="A4" style={s.page}>
        <View style={s.topRule} />
        <View style={s.twoCol}>
          <View style={s.mainCol}>
            <View style={s.section}>
              <Text style={s.sectionLabel}>{t.section.projects}</Text>
              {t.projects.map(([title, type, body, href]) => (
                <View style={s.project} key={title} wrap={false}>
                  <View style={s.projectTop}><Text style={s.projectTitle}>{title}</Text><Text style={s.projectType}>{type}</Text></View>
                  <Text style={s.projectBody}>{body}</Text>
                  <Link src={`https://${href}`} style={s.projectLink}>{href} ↗</Link>
                </View>
              ))}
            </View>
          </View>
          <View style={s.sideCol}>
            <View style={s.section}>
              <Text style={s.sectionLabel}>{t.section.skills}</Text>
              {t.skills.map(([title, body]) => <View style={s.skillGroup} key={title}><Text style={s.skillTitle}>{title}</Text><Text style={s.skillText}>{body}</Text></View>)}
            </View>
            <View style={s.section}>
              <Text style={s.sectionLabel}>{t.section.education}</Text>
              {t.education.map(([title, body]) => <View style={s.edu} key={title}><Text style={s.eduTitle}>{title}</Text><Text style={s.eduSub}>{body}</Text></View>)}
            </View>
          </View>
        </View>
        <View style={s.section}>
          <Text style={s.sectionLabel}>{t.section.principles}</Text>
          <View style={s.philosophy}><Text style={s.philosophyText}>{t.principles}</Text></View>
        </View>
        <Footer />
      </Page>
    </Document>
  )
}

export default function Resume() {
  const { lang } = useLang()
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    let objectUrl
    let alive = true
    setPdfUrl(null)
    pdf(<ResumeDoc lang={lang} />).toBlob().then((blob) => {
      if (!alive) return
      objectUrl = URL.createObjectURL(blob)
      setPdfUrl(objectUrl)
    })
    return () => {
      alive = false
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [lang])

  if (!pdfUrl) {
    return <div className="resume-loading"><div className="loading-copy"><div className="loading-reel" /><p>{lang === 'ko' ? '이력서를 만들고 있습니다…' : 'Preparing the résumé…'}</p></div></div>
  }

  const filename = `Changho_Park_Resume_${lang.toUpperCase()}.pdf`
  return (
    <div className="resume-page">
      <div className="resume-toolbar">
        <p>{lang === 'ko' ? '2페이지 · 2026년 9월 업데이트' : '2 pages · Updated September 2026'}</p>
        <div className="resume-actions">
          <a href={pdfUrl} target="_blank" rel="noreferrer">{lang === 'ko' ? '새 창에서 열기 ↗' : 'Open ↗'}</a>
          <a href={pdfUrl} download={filename}>{lang === 'ko' ? '다운로드 ↓' : 'Download ↓'}</a>
        </div>
      </div>
      <iframe className="resume-viewer" src={pdfUrl} title="Changho Park résumé PDF" />
    </div>
  )
}
