import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

const pages = [
  { name: 'About', url: '/' },
  { name: 'Apps', url: '/apps' },
  { name: 'Resume', url: '/resume' },
  { name: 'Donate', url: '/donate' },
]

export default function ResponsiveAppBar() {
  const navigate = useNavigate()
  const { lang, toggle } = useLang()

  return (
    <AppBar position="static" elevation={0} sx={{ background: '#fff', borderBottom: '1px solid #e5e7eb' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 64 }}>
          <Box sx={{ flexGrow: 0, mr: 4 }}>
            <img
              onClick={() => navigate('/')}
              src="/favicon.svg"
              alt="hoya dev"
              style={{ width: '40px', cursor: 'pointer', display: 'block' }}
            />
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 0.5 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.url)}
                sx={{ color: '#374151', fontWeight: 500, fontSize: '0.875rem', textTransform: 'none', px: 1.5 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Button
              onClick={toggle}
              sx={{ minWidth: 0, px: 1.5, py: 0.5, fontSize: '0.75rem', fontWeight: 600, color: '#374151', border: '1px solid #e5e7eb', borderRadius: 1.5, textTransform: 'none' }}
            >
              {lang === 'ko' ? 'EN' : '한'}
            </Button>
            <Avatar alt="hoyaaaa" src="https://avatars.githubusercontent.com/hoyaaaa" sx={{ width: 32, height: 32 }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
