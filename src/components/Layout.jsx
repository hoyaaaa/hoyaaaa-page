import ResponsiveAppBar from './AppBar'

export default function Layout({ children }) {
  return (
    <section>
      <ResponsiveAppBar />
      <article style={{ margin: '16px 0' }}>
        {children}
      </article>
    </section>
  )
}
