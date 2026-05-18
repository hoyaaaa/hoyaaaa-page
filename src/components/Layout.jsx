import ResponsiveAppBar from './AppBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <section>
      <ResponsiveAppBar />
      <article style={{ margin: '16px 0' }}>
        {children}
      </article>
      <Footer />
    </section>
  )
}
