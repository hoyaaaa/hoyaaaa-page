import AppBar from './AppBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="site-shell">
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
