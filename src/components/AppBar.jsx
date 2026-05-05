import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { useNavigate } from 'react-router-dom'

const pages = [
  { name: 'apps', url: '/' },
  { name: 'donate', url: '/donate' },
]

export default function ResponsiveAppBar() {
  const navigate = useNavigate()

  return (
    <AppBar position="static" style={{ background: '#66c89e' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button style={{ height: '100%' }}>
            <img
              onClick={() => navigate('/')}
              src="/images/hoyatech-logo.png"
              alt="hoyatech"
              style={{ width: '150px', cursor: 'pointer' }}
            />
          </Button>
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
                style={{ height: '100%' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <IconButton onClick={() => navigate('/profile')} sx={{ p: 0 }}>
                <Avatar alt="hoyaaaa" src="https://avatars.githubusercontent.com/hoyaaaa" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
