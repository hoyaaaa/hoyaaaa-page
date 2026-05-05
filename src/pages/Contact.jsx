import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material'
import { Octokit } from '@octokit/core'

export default function Contact() {
  const handleSubmit = async (event) => {
    event.preventDefault()
    const octokit = new Octokit({ auth: import.meta.env.VITE_GITHUB_ISSUE_KEY })

    const messageType = event.target.type.value
    const name = event.target.name.value
    const email = event.target.email.value
    const title = event.target.title.value
    const content = event.target.content.value

    let body = `### 이름\n\n${name}\n\n`
    if (email !== '') {
      body += `### 이메일\n\n${email}\n\n`
    }
    body += `### 내용\n\n${content}`

    const response = await octokit.request('POST /repos/{owner}/{repo}/issues', {
      owner: 'hoyaaaa',
      repo: 'hoyaaaa.github.io',
      title: (messageType === 'ask' ? '질문' :
              messageType === 'suggest' ? '제안' :
              messageType === 'bug' ? '버그' : '기타') + `: ${title}`,
      body,
    })

    if (response.status === 201) {
      window.location.reload()
    } else {
      alert('메시지가 제대로 전송되지 않았습니다. 나중에 다시 연락바랍니다.')
    }
  }

  return (
    <Container maxWidth="sm" style={{ padding: '40px 16px' }}>
      <Paper
        component="form"
        elevation={10}
        sx={{ width: '100%', padding: '30px' }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" gutterBottom>연락하기</Typography>
        <Typography variant="body1" gutterBottom>
          당신의 의견을 정말로 듣고 싶습니다.
          <br />
          질문이나 기능 제안, 버그 신고 등 말할 것이 있으시다면 알려주세요.
          <br /><br />
          이메일(<a href="mailto:hoya.develop@gmail.com" style={{ color: 'inherit' }}>hoya.develop@gmail.com</a>)이나{' '}
          <a href="https://github.com/hoyaaaa/hoyaaaa.github.io/issues" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
            Github Issues
          </a>를 통해서 직접 연락주셔도 괜찮습니다.
        </Typography>
        <div style={{ marginTop: '10px' }}>
          <RadioGroup row name="type" defaultValue="ask">
            <FormControlLabel value="ask" control={<Radio />} label="질문" />
            <FormControlLabel value="suggest" control={<Radio />} label="제안" />
            <FormControlLabel value="bug" control={<Radio />} label="버그" />
            <FormControlLabel value="other" control={<Radio />} label="기타" />
          </RadioGroup>
          <TextField required fullWidth label="이름" id="name" margin="dense" />
          <TextField fullWidth label="이메일" id="email" margin="dense" />
          <TextField required fullWidth label="제목" id="title" margin="dense" />
          <TextField required multiline minRows={4} fullWidth label="내용" id="content" margin="dense" />
        </div>
        <Button type="submit" variant="outlined" style={{ marginTop: '10px' }}>Submit</Button>
      </Paper>
    </Container>
  )
}
