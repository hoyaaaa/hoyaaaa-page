import { Box, Container, Typography } from '@mui/material'

const apps = [
  { name: '#실시간 검색어', icon: 'realtime-trends.png', url: 'https://chrome.google.com/webstore/detail/dmbaagbmhlhdnlmbcncneijndejlalie' },
]

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '88vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 8 }}>
      <Box sx={{ mb: 6 }}>
        <Typography variant="overline" sx={{ color: '#9ca3af', letterSpacing: 3, fontSize: '0.7rem' }}>
          HOYA DEV
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#111827', mt: 1 }}>
          Apps
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {apps.map((app, index) => (
          <a key={index} href={app.url} target="_blank" rel="noreferrer">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                border: '1px solid #e5e7eb',
                borderRadius: 2,
                width: 240,
                cursor: 'pointer',
                transition: 'border-color 0.15s, box-shadow 0.15s',
                '&:hover': { borderColor: '#d1d5db', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' },
              }}
            >
              <img src={`/images/apps/${app.icon}`} alt={app.name} style={{ width: 48, height: 48, borderRadius: 10, objectFit: 'cover' }} />
              <Typography sx={{ fontSize: '0.875rem', fontWeight: 500, color: '#374151' }}>
                {app.name}
              </Typography>
            </Box>
          </a>
        ))}
      </Box>
    </Container>
  )
}
