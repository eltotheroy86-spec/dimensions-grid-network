import Link from 'next/link'
import GridBackground from '../components/GridBackground'

export default function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <GridBackground />
      <div className="container">
        <div className="card">
          <h1>Dimensions Grid Network</h1>
          <p className="small">
            Welcome to the Dimensions Grid Network demo. Use the Grid Browser to explore
            grid overlays and examples.
          </p>

          <div style={{ marginTop: 20 }}>
            <Link href="/grid/overlay">
              <a className="card" style={{ display: 'inline-block', padding: 12 }}>
                Open Grid Browser Demo →
              </a>
            </Link>
          </div>

          <section style={{ marginTop: 24 }}>
            <h3>Zapier webhook</h3>
            <p className="small">
              A Zapier-compatible webhook endpoint is available at <code>/api/hooks/zapier</code>.
              Send POST requests with JSON payloads.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}