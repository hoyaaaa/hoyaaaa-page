import { useState, useEffect } from 'react'
import { pdf, Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'

Font.register({
  family: 'NotoSansKR',
  fonts: [
    { src: '/fonts/NotoSansKR-Regular.otf', fontWeight: 400 },
    { src: '/fonts/NotoSansKR-Bold.otf', fontWeight: 700 },
  ],
})

const s = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'NotoSansKR',
    fontSize: 10,
    color: '#1a1a1a',
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 60,
  },

  // ── Header ───────────────────────────────
  header: {
    flexDirection: 'column',
    marginBottom: 24,
    paddingBottom: 16,
    borderBottom: '2px solid #1a1a1a',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  nameKo: {
    fontSize: 26,
    fontWeight: 700,
    marginRight: 10,
  },
  nameEn: {
    fontSize: 14,
    color: '#555',
  },
  role: {
    fontSize: 11,
    color: '#444',
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactDivider: {
    fontSize: 9,
    color: '#bbb',
    marginHorizontal: 6,
  },
  contactItem: {
    fontSize: 9,
    color: '#555',
  },
  contactDot: {
    fontSize: 9,
    color: '#bbb',
    marginHorizontal: 6,
  },

  // ── Section ──────────────────────────────
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#1a1a1a',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottom: '1px solid #d1d5db',
  },

  // ── Summary ──────────────────────────────
  summary: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.8,
  },

  // ── Experience Item ───────────────────────
  item: {
    marginBottom: 14,
  },
  itemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 1,
  },
  itemTitle: {
    fontWeight: 700,
    fontSize: 11,
  },
  itemDate: {
    fontSize: 9,
    color: '#6b7280',
  },
  itemOrg: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 5,
  },
  bullet: {
    fontSize: 10,
    color: '#374151',
    marginBottom: 2,
    paddingLeft: 10,
  },
  stackRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  stackTag: {
    fontSize: 8.5,
    color: '#374151',
    backgroundColor: '#f3f4f6',
    padding: '2 6',
    borderRadius: 2,
    marginRight: 4,
    marginBottom: 3,
  },

  // ── Skills ────────────────────────────────
  skillRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  skillCategory: {
    fontWeight: 700,
    fontSize: 10,
    width: 80,
    color: '#374151',
  },
  skillValues: {
    flex: 1,
    fontSize: 10,
    color: '#374151',
  },

  // ── Education ────────────────────────────
  eduRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  eduLeft: {
    flex: 1,
  },
  eduTitle: {
    fontWeight: 700,
    fontSize: 10.5,
    marginBottom: 1,
  },
  eduSub: {
    fontSize: 9.5,
    color: '#555',
  },
  eduDate: {
    fontSize: 9,
    color: '#6b7280',
  },
})

const Bullet = ({ children }) => (
  <Text style={s.bullet}>{'• '}{children}</Text>
)

const StackTags = ({ tags }) => (
  <View style={s.stackRow}>
    {tags.map(t => <Text key={t} style={s.stackTag}>{t}</Text>)}
  </View>
)

const ResumeDoc = () => (
  <Document title="박창호_이력서">
    <Page size="A4" style={s.page}>

      {/* ── Header ── */}
      <View style={s.header}>
        <View style={s.nameRow}>
          <Text style={s.nameKo}>박창호</Text>
          <Text style={s.nameEn}>Changho Park</Text>
        </View>
        <Text style={s.role}>Software Engineer · Full-stack Developer</Text>
        <View style={s.contactRow}>
          <Text style={s.contactItem}>pch4463@gmail.com</Text>
          <Text style={s.contactDot}>·</Text>
          <Text style={s.contactItem}>github.com/hoyaaaa</Text>
          <Text style={s.contactDot}>·</Text>
          <Text style={s.contactItem}>linkedin.com/in/박창호</Text>
          <Text style={s.contactDot}>·</Text>
          <Text style={s.contactItem}>Seoul, Korea</Text>
        </View>
      </View>

      {/* ── Summary ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>About</Text>
        <Text style={s.summary}>
          삼성전자 AI 개발 그룹에서 Bixby 음성 인식 서버 개발 경험을 쌓아온 소프트웨어 엔지니어입니다.
          Language Model 학습 및 배포, 대용량 데이터 파이프라인, CI/CD 자동화까지 폭넓은 개발 역량을 보유하고 있으며,
          풀스택 개발자로서 백엔드부터 프론트엔드까지 창의적인 아이디어를 코드로 구현하는 것을 즐깁니다.
        </Text>
      </View>

      {/* ── Experience ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Experience</Text>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>ASR 서버 파트 · AI 개발 그룹</Text>
            <Text style={s.itemDate}>2021.01 – 현재</Text>
          </View>
          <Text style={s.itemOrg}>삼성전자 무선사업부 · Samsung Electronics Mobile Division</Text>
          <Bullet>Bixby 음성 인식 서버 ASR Language Model 학습 파이프라인 설계 및 자동화</Bullet>
          <Bullet>학습 모델 스테이징 검증 후 글로벌 프로덕션 배포 운영 관리</Bullet>
          <Bullet>수억 건 규모의 음성 데이터 전처리 파이프라인 개발로 처리 효율 대폭 개선</Bullet>
          <Bullet>Sumo Logic 기반 실시간 모델 성능 모니터링 체계 구축</Bullet>
          <Bullet>Jenkins·CircleCI를 활용한 ML 학습 및 배포 CI/CD 파이프라인 구축</Bullet>
          <StackTags tags={['Python', 'FastAPI', 'Selenium', 'Java', 'Kotlin', 'TensorFlow', 'AWS EC2/ECR', 'Jenkins', 'CircleCI', 'Sumo Logic']} />
        </View>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>Metric 파트 · AI 개발 그룹</Text>
            <Text style={s.itemDate}>2019.06 – 2020.12</Text>
          </View>
          <Text style={s.itemOrg}>삼성전자 무선사업부 · Samsung Electronics Mobile Division</Text>
          <Bullet>Bixby 음성 인식 품질 지표 (WER, 인식률, 응답 지연 등) 분석 체계 수립</Bullet>
          <Bullet>ASR 전사(Transcription) 결과 비교·분석 웹 툴 풀스택 단독 개발 및 배포</Bullet>
          <Bullet>실시간 KPI 시각화 대시보드 개발로 팀 내 데이터 기반 의사결정 지원</Bullet>
          <Bullet>Celery·Redis 비동기 배치 처리 아키텍처 적용으로 대량 데이터 분석 성능 개선</Bullet>
          <StackTags tags={['Python', 'Flask', 'Celery', 'Redis', 'Java', 'Spring', 'Node.js', 'JavaScript', 'AWS EC2/EB/Lambda', 'Jenkins', 'CircleCI', 'C#']} />
        </View>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>인턴십 · 보이스 서비스 개발그룹</Text>
            <Text style={s.itemDate}>2015.01 – 2015.02</Text>
          </View>
          <Text style={s.itemOrg}>삼성전자 무선사업부 · Samsung Electronics Mobile Division</Text>
          <Bullet>R과 Hadoop을 활용한 S-Voice metadata metric 분석 및 시각화 보고서 작성</Bullet>
          <StackTags tags={['R', 'Hadoop']} />
        </View>
      </View>

      {/* ── Projects ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Projects</Text>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>#실시간 검색어 · Chrome Extension</Text>
          </View>
          <Text style={s.itemOrg}>개인 프로젝트 · Chrome Web Store 출시</Text>
          <Bullet>네이버·다음·구글 등 포털 사이트별 실시간 검색어를 새탭에서 즉시 확인하는 크롬 확장 프로그램</Bullet>
          <Bullet>백엔드 API 설계부터 프론트엔드 UI까지 풀스택 단독 개발 및 운영</Bullet>
          <StackTags tags={['React', 'JavaScript', 'FastAPI', 'MySQL', 'Heroku', 'AWS Lightsail']} />
        </View>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>코상인 (Co-sangin)</Text>
            <Text style={s.itemDate}>팀 프로젝트 · Frontend 개발</Text>
          </View>
          <Text style={s.itemOrg}>CO-GGIRI · PM 1, Frontend 2, Backend 3</Text>
          <Bullet>상인과 고객을 이어주는 위치 기반 SNS — 피드, 실시간 메신저 기능 구현</Bullet>
          <Bullet>Redux를 활용한 전역 상태 관리 및 컴포넌트 설계 담당</Bullet>
          <StackTags tags={['React', 'Redux', 'JavaScript', 'Spring', 'PostgreSQL']} />
        </View>

        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>Electree</Text>
            <Text style={s.itemDate}>sGen Club · Android 개발</Text>
          </View>
          <Text style={s.itemOrg}>Samsung SDS ICT Membership · PM 1, HW 2, Android 2, Designer 1</Text>
          <Bullet>안드로이드 앱으로 원격 콘센트 ON/OFF 제어 및 실시간 전력량 모니터링</Bullet>
          <Bullet>Android 앱 개발 및 Arduino 시리얼 통신 연동 담당</Bullet>
          <StackTags tags={['Android', 'Java', 'Arduino']} />
        </View>
      </View>

      {/* ── Skills ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Skills</Text>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>Frontend</Text>
          <Text style={s.skillValues}>HTML, CSS, JavaScript, TypeScript, React, jQuery</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>Backend</Text>
          <Text style={s.skillValues}>Python, FastAPI, Django, Java, Kotlin, Spring, MySQL</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>Cloud</Text>
          <Text style={s.skillValues}>AWS (EC2, ECR, EB, Lambda, Lightsail), Heroku</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>CI/CD</Text>
          <Text style={s.skillValues}>Jenkins, Groovy, CircleCI, GitHub Actions</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>AI / ML</Text>
          <Text style={s.skillValues}>TensorFlow, ASR, Language Model Training</Text>
        </View>
        <View style={s.skillRow}>
          <Text style={s.skillCategory}>Tools</Text>
          <Text style={s.skillValues}>Git, GitHub, Jira, Confluence</Text>
        </View>
      </View>

      {/* ── Education ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Education</Text>
        <View style={s.eduRow}>
          <View style={s.eduLeft}>
            <Text style={s.eduTitle}>한양대학교 (Hanyang University)</Text>
            <Text style={s.eduSub}>컴퓨터공학부 (Dept. of Computer Science & Engineering)</Text>
            <Text style={s.eduSub}>알고리즘 동아리 · 안드로이드 동아리 · 학생회</Text>
          </View>
          <Text style={s.eduDate}>2013.03 – 2019.02</Text>
        </View>
        <View style={s.eduRow}>
          <View style={s.eduLeft}>
            <Text style={s.eduTitle}>경남과학고등학교 (Gyeongnam Science High School)</Text>
          </View>
          <Text style={s.eduDate}>2011.03 – 2013.02</Text>
        </View>
      </View>

      {/* ── Activities ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Activities</Text>
        <View style={s.item}>
          <View style={s.itemTop}>
            <Text style={s.itemTitle}>sGen Club · Samsung SDS ICT Membership</Text>
            <Text style={s.itemDate}>2014.07 – 2015.06</Text>
          </View>
          <Bullet>개발자 트랙으로 활동 · 팀 프로젝트 Electree 기획 및 Android 개발 담당</Bullet>
        </View>
      </View>

      {/* ── Certificates ── */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>Certificates</Text>
        <Text style={[s.bullet]}>• 정보처리산업기사 (Industrial Engineer Information Processing)</Text>
      </View>

    </Page>
  </Document>
)


export default function Resume() {
  const [pdfUrl, setPdfUrl] = useState(null)

  useEffect(() => {
    pdf(<ResumeDoc />)
      .toBlob()
      .then((blob) => {
        const url = URL.createObjectURL(blob)
        setPdfUrl(url)
      })

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl)
    }
  }, [])

  if (!pdfUrl) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 64px)', gap: 2 }}>
        <CircularProgress size={32} sx={{ color: '#374151' }} />
        <Typography sx={{ color: '#9ca3af', fontSize: '0.875rem' }}>이력서 생성 중...</Typography>
      </Box>
    )
  }

  return (
    <embed
      src={pdfUrl}
      type="application/pdf"
      width="100%"
      style={{ height: 'calc(100vh - 64px)', display: 'block' }}
    />
  )
}
