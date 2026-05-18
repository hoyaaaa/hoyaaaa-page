import ResponsiveAppBar from './AppBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <ResponsiveAppBar />
      <article style={{ flex: 1, overflow: 'auto' }}>
        {children}
      </article>
      <Footer />
    </section>
  )
}
