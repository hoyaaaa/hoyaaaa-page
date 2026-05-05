import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default function Donate() {
  return (
    <Container maxWidth="sm" style={{ padding: '40px 16px' }}>
      <Paper elevation={10} sx={{ width: '100%', padding: '30px' }}>
        <Typography variant="h3" component="div" gutterBottom style={{ textAlign: 'center' }}>
          Support by donating
        </Typography>
        <Typography variant="h6" gutterBottom>
          이 어플리케이션들이 마음에 드신다면,
          <br />기부를 한 번 고려해보세요.
          <br />당신의 도움이 개발 과정과 기능 추가에 큰 도움이 됩니다. 감사합니다.
        </Typography>
        <img src="/images/kakaopay_qrcode.png" alt="KakaoPay" style={{ width: '33%', marginTop: '20px' }} />
        <img src="/images/toss_qrcode.png" alt="Toss" style={{ width: '33%', marginTop: '20px' }} />
        <a href="https://www.ko-fi.com/hoyaaaa" target="_blank" rel="noreferrer">
          <img src="/images/kofi_qrcode.png" alt="Ko-fi" style={{ width: '33%', marginTop: '20px' }} />
        </a>
      </Paper>
    </Container>
  )
}
