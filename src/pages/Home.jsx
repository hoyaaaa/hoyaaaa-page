import { Container, Grid, Typography } from '@mui/material'
import { ImageButton, ImageSrc, ImageBackdrop, Image, ImageMarked } from '../components/ImageButton'

const apps = [
  { name: '#실시간 검색어', icon: 'realtime-trends.png', url: 'https://chrome.google.com/webstore/detail/dmbaagbmhlhdnlmbcncneijndejlalie' },
]

export default function Home() {
  return (
    <Container fixed style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
          <img src="/images/hoyatech-logo-only.png" alt="hoyatech" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h3" component="div" gutterBottom>
            HOYA TECH Apps
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {apps.map((app, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <a href={app.url} target="_blank" rel="noreferrer">
                  <ImageButton focusRipple style={{ width: '100%' }}>
                    <ImageSrc style={{ backgroundImage: `url(/images/apps/${app.icon})` }} />
                    <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                      <Typography>
                        {app.name}
                        <ImageMarked className="MuiImageMarked-root" />
                      </Typography>
                    </Image>
                  </ImageButton>
                </a>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}
