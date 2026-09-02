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
    headline: 'Go로 신뢰할 수 있는 프로덕션 시스템을 만드는 백엔드 엔지니어',
    about: '인증과 권한, API 계약, 데이터 경계처럼 정확해야 하는 영역을 중심으로 Go 서버를 개발하고 운영합니다. 모호한 정책을 명시적인 계약으로 바꾸고, 운영 문제를 재현 가능한 테스트와 작은 변경으로 해결하는 일을 좋아합니다. 클라이언트 개발 경험을 바탕으로 서버와 화면 양쪽의 경계를 함께 설계합니다.',
    section: { about: 'ABOUT', experience: 'EXPERIENCE', skills: 'CORE SKILLS', projects: 'SELECTED PUBLIC WORK', education: 'EDUCATION & ACTIVITIES', principles: 'ENGINEERING PRINCIPLES' },
    experience: [
      {
        company: 'Unboxers Corp', role: 'Backend Engineer', date: '2024 — 현재',
        bullets: [
          '교육 운영 플랫폼의 Go 백엔드와 여러 웹 클라이언트가 공유하는 API·데이터 계약을 개발하고 운영합니다.',
          '역할·스코프 기반 접근 제어, Bearer·쿠키 인증, 단기 Context Token, 감사 로그를 fail-closed 정책으로 설계했습니다.',
          'PostgreSQL을 권한과 도메인 데이터의 원본으로 두고 OpenAPI, RLS projection, 스키마 변화와 단계적 롤아웃 경계를 연결했습니다.',
          '운영 중복 요청과 지연을 계측해 동일 동시 요청을 하나의 DB 조회로 병합하고 race·회귀 테스트로 고정했습니다.',
          '백엔드뿐 아니라 TypeScript 웹 클라이언트, E2E, Grafana 관측 지표와 CI까지 필요한 경계를 직접 연결합니다.',
        ],
        tags: ['Go', 'PostgreSQL', 'OpenAPI', 'Supabase', 'Grafana', 'Docker', 'GitHub Actions'],
      },
      {
        company: 'Samsung Electronics', role: 'Software Engineer · AI Development Group', date: '2019 — 2024',
        bullets: [
          'Bixby 음성 인식 Language Model의 학습·검증·글로벌 프로덕션 배포 파이프라인을 설계하고 자동화했습니다.',
          '수억 건 규모 음성 데이터 전처리와 비동기 분석 파이프라인을 개발하고 처리 효율과 운영 가시성을 개선했습니다.',
          'WER, 인식률, 응답 지연을 비교·분석하는 내부 웹 도구와 실시간 KPI 대시보드를 풀스택으로 개발했습니다.',
          '모델 성능 모니터링과 Jenkins·CircleCI 기반 학습·배포 CI/CD 체계를 구축했습니다.',
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
      ['Backend', 'Go, Python, HTTP APIs, OpenAPI, authentication, authorization, idempotency'],
      ['Data', 'PostgreSQL, MySQL, Redis, Supabase, schema evolution, RLS'],
      ['Reliability', 'Observability, concurrency, race testing, performance profiling, incident response'],
      ['Delivery', 'Docker, GitHub Actions, Jenkins, CircleCI, staged rollout and rollback'],
      ['Clients', 'TypeScript, React, Flutter — enough to design both sides of an API boundary'],
    ],
    projects: [
      ['nsfw_detector_flutter', 'PACKAGE · 2026', '이미지를 외부 서버로 보내지 않는 Flutter 온디바이스 분류 패키지. isolate, GPU fallback, 배치 처리와 런타임 회귀 테스트를 제공합니다.', 'github.com/hoyaaaa/nsfw_detector_flutter'],
      ['trackpoint-daemon-macos', 'SYSTEM UTILITY · 2026', 'CGEventTap과 IOHID를 활용해 ThinkPad TrackPoint 키보드의 스크롤, 키 매핑, 포인터 동작을 macOS에 맞게 구현했습니다.', 'github.com/hoyaaaa/trackpoint-daemon-macos'],
      ['AoE2DE Font Mod', 'TOOLING · 2026', '게임의 코드포인트를 읽고 글리프와 DDS 텍스처 아틀라스를 재생성해 macOS 버전에 한글 폰트를 적용합니다.', 'github.com/hoyaaaa/aoe2de-font-mod'],
      ['pgschema', 'OPEN SOURCE · 2026', '임시 스키마 이름 변경 이후 뷰 정의가 흔들리는 문제를 정규화하는 Go 수정 사항을 upstream에 기여했습니다.', 'github.com/pgplex/pgschema/pull/520'],
    ],
    education: [
      ['한양대학교', '컴퓨터공학부 · 2013 — 2019'],
      ['경남과학고등학교', '2011 — 2013'],
      ['Samsung SDS ICT Membership', 'sGen Club 개발자 트랙 · 2014 — 2015'],
    ],
    principles: '명시적인 계약을 숨은 가정보다 선호합니다. 자신감 있는 추측보다 검증 가능한 증거를, 큰 재작성보다 문제를 온전히 해결하는 가장 작은 변경을 선택합니다.',
  },
  en: {
    headline: 'Backend engineer building reliable production systems in Go',
    about: 'I build and operate Go services around the parts where correctness matters most: identity, authorization, API contracts, and data boundaries. I enjoy turning ambiguous policies into explicit contracts, and production incidents into reproducible tests and small, measurable changes. My client-side background helps me design both sides of an API boundary.',
    section: { about: 'ABOUT', experience: 'EXPERIENCE', skills: 'CORE SKILLS', projects: 'SELECTED PUBLIC WORK', education: 'EDUCATION & ACTIVITIES', principles: 'ENGINEERING PRINCIPLES' },
    experience: [
      { company: 'Unboxers Corp', role: 'Backend Engineer', date: '2024 — PRESENT', bullets: ['Build and operate Go services and shared API/data contracts across an education operations platform and its web clients.', 'Designed fail-closed role- and scope-based access control spanning bearer and cookie authentication, short-lived context tokens, and audit trails.', 'Connected PostgreSQL as the source of truth with OpenAPI contracts, RLS projections, schema evolution, and staged rollout boundaries.', 'Measured a production request fan-out and coalesced identical concurrent work into one database read, locked down with race and regression tests.', 'Work across Go services, TypeScript clients, E2E coverage, Grafana telemetry, and CI when a system boundary requires it.'], tags: ['Go', 'PostgreSQL', 'OpenAPI', 'Supabase', 'Grafana', 'Docker', 'GitHub Actions'] },
      { company: 'Samsung Electronics', role: 'Software Engineer · AI Development Group', date: '2019 — 2024', bullets: ['Designed and automated training, validation, and global production deployment pipelines for Bixby speech-recognition language models.', 'Built preprocessing and asynchronous analytics pipelines over hundreds of millions of speech records.', 'Developed internal full-stack tools for WER, recognition quality, latency analysis, and real-time KPI visualization.', 'Established model monitoring and CI/CD workflows with Jenkins and CircleCI.'], tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'TensorFlow', 'AWS', 'Jenkins', 'CircleCI'] },
      { company: 'Samsung Electronics', role: 'Software Engineering Intern · Voice Service', date: '2015', bullets: ['Analyzed S-Voice metadata quality metrics with R and Hadoop and produced visualization reports.'], tags: ['R', 'Hadoop'] },
    ],
    skills: [
      ['Backend', 'Go, Python, HTTP APIs, OpenAPI, authentication, authorization, idempotency'],
      ['Data', 'PostgreSQL, MySQL, Redis, Supabase, schema evolution, RLS'],
      ['Reliability', 'Observability, concurrency, race testing, performance profiling, incident response'],
      ['Delivery', 'Docker, GitHub Actions, Jenkins, CircleCI, staged rollout and rollback'],
      ['Clients', 'TypeScript, React, Flutter — enough to design both sides of an API boundary'],
    ],
    projects: [
      ['nsfw_detector_flutter', 'PACKAGE · 2026', 'On-device image classification for Flutter with background isolates, GPU fallback, batching, and hardened runtime tests.', 'github.com/hoyaaaa/nsfw_detector_flutter'],
      ['trackpoint-daemon-macos', 'SYSTEM UTILITY · 2026', 'A CGEventTap and IOHID menu-bar daemon that makes TrackPoint scrolling, key mapping, and pointer behavior native on macOS.', 'github.com/hoyaaaa/trackpoint-daemon-macos'],
      ['AoE2DE Font Mod', 'TOOLING · 2026', 'Rebuilds glyphs and DDS texture atlases from the game’s codepoint map to bring Korean fonts to the macOS version.', 'github.com/hoyaaaa/aoe2de-font-mod'],
      ['pgschema', 'OPEN SOURCE · 2026', 'Contributed a Go fix that normalizes view definitions after temporary schema renames in declarative Postgres migrations.', 'github.com/pgplex/pgschema/pull/520'],
    ],
    education: [['Hanyang University', 'B.S. in Computer Science & Engineering · 2013 — 2019'], ['Gyeongnam Science High School', '2011 — 2013'], ['Samsung SDS ICT Membership', 'sGen Club developer track · 2014 — 2015']],
    principles: 'I prefer explicit contracts over hidden assumptions, verifiable evidence over confident guesses, and the smallest change that fully solves the problem over a sweeping rewrite.',
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
        <p>{lang === 'ko' ? '현재 GitHub 활동과 경력을 반영한 2페이지 PDF 이력서' : 'A two-page PDF résumé based on current work and GitHub activity'}</p>
        <div className="resume-actions">
          <a href={pdfUrl} target="_blank" rel="noreferrer">{lang === 'ko' ? '새 창에서 열기 ↗' : 'Open ↗'}</a>
          <a href={pdfUrl} download={filename}>{lang === 'ko' ? '다운로드 ↓' : 'Download ↓'}</a>
        </div>
      </div>
      <iframe className="resume-viewer" src={pdfUrl} title="Changho Park résumé PDF" />
    </div>
  )
}
