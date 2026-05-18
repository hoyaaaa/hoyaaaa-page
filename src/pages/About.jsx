import { Box, Container, Typography } from '@mui/material'
import { useLang } from '../context/LanguageContext'

const content = {
  ko: {
    label: 'HOYA DEV',
    title: '안녕하세요, 박창호입니다 👋',
    desc: '서울을 기반으로 활동하는 소프트웨어 엔지니어입니다. 현재 Unboxers Corp에서 백엔드 개발자로 일하며, 틈틈이 사이드 프로젝트를 만들고 있습니다. 이 사이트는 제가 만든 것들을 공유하는 공간입니다.',
    role: '현재 @ Unboxers Corp · 백엔드 개발자',
  },
  en: {
    label: 'HOYA DEV',
    title: "Hi, I'm Changho Park 👋",
    desc: 'Software engineer based in Seoul, Korea. Currently working as a backend developer at Unboxers Corp, and building side projects in my spare time. This site is where I share what I\'ve made.',
    role: 'Currently @ Unboxers Corp · Backend Developer',
  },
}

export default function About() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <Container maxWidth="lg" sx={{ minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
      <Box sx={{ maxWidth: 560 }}>
        <Typography variant="overline" sx={{ color: '#9ca3af', letterSpacing: 3, fontSize: '0.7rem' }}>
          {t.label}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mt: 1, mb: 2 }}>
          {t.title}
        </Typography>
        <Typography sx={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.9, mb: 3 }}>
          {t.desc}
        </Typography>
        <Typography sx={{ fontSize: '0.9rem', color: '#9ca3af', lineHeight: 1.8 }}>
          {t.role}
        </Typography>
      </Box>
    </Container>
  )
}
