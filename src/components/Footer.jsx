import { Box, Select, MenuItem, FormControl, Typography } from '@mui/material'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { lang, toggle } = useLang()

  return (
    <Box component="footer" sx={{ borderTop: '1px solid #e5e7eb', py: 2, px: 4, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
      <Typography sx={{ fontSize: '0.8rem', color: '#9ca3af' }}>언어</Typography>
      <FormControl size="small" sx={{ minWidth: 120 }}>
        <Select
          value={lang}
          onChange={e => e.target.value !== lang && toggle()}
          sx={{ fontSize: '0.8rem' }}
        >
          <MenuItem value="ko">한국어</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
