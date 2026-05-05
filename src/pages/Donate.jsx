import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const methods = [
  { src: '/images/kakaopay_qrcode.png', label: 'KakaoPay' },
  { src: '/images/toss_qrcode.png', label: 'Toss' },
  { src: '/images/kofi_qrcode.png', label: 'Ko-fi', href: 'https://www.ko-fi.com/hoyaaaa' },
]

export default function Donate() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Typography variant="overline" sx={{ color: '#9ca3af', letterSpacing: 3, fontSize: '0.7rem' }}>
        HOYA DEV
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#111827', mt: 1, mb: 1 }}>
        Donate
      </Typography>
      <Typography sx={{ color: '#6b7280', fontSize: '0.9rem', mb: 4, lineHeight: 1.7 }}>
        이 어플리케이션들이 마음에 드신다면 기부를 한 번 고려해보세요.
        <br />당신의 도움이 개발과 기능 추가에 큰 힘이 됩니다. 감사합니다.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        {methods.map(({ src, label, href }) => {
          const img = (
            <Box
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: 2,
                p: 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                transition: 'border-color 0.15s',
                '&:hover': { borderColor: '#9ca3af' },
              }}
            >
              <img src={src} alt={label} style={{ width: 100, height: 100, objectFit: 'contain' }} />
              <Typography sx={{ fontSize: '0.75rem', color: '#6b7280' }}>{label}</Typography>
            </Box>
          )
          return href ? (
            <a key={label} href={href} target="_blank" rel="noreferrer">{img}</a>
          ) : (
            <Box key={label}>{img}</Box>
          )
        })}
      </Box>
    </Container>
  )
}
