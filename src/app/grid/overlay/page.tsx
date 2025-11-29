'use client'

import { useState } from 'react'
import GridBackground from '../../../components/GridBackground'
import Link from 'next/link'

export default function GridOverlayDemo() {
  const [showGrid, setShowGrid] = useState(true)
  const [cellSize, setCellSize] = useState(48)
  const [opacity, setOpacity] = useState(0.12)

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <GridBackground size={cellSize} opacity={opacity} show={showGrid} />
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Grid Browser — Overlay Demo</h2>
          <Link href="/">
            <a className="small">← Back</a>
          </Link>
        </div>

        <div className="card" style={{ marginTop: 16 }}>
          <p className="small">
            Toggle grid overlay and adjust parameters to see how grid sizing and opacity affect layout.
          </p>

          <div className="controls">
            <label className="small">
              <input type="checkbox" checked={showGrid} onChange={() => setShowGrid(v => !v)} /> Show Grid
            </label>

            <label className="small">
              Cell size:
              <input
                type="range"
                min={8}
                max={256}
                value={cellSize}
                onChange={(e) => setCellSize(Number(e.target.value))}
                style={{ verticalAlign: 'middle', marginLeft: 8 }}
              />
              <strong style={{ marginLeft: 8 }}>{cellSize}px</strong>
            </label>

            <label className="small">
              Opacity:
              <input
                type="range"
                min={0}
                max={0.6}
                step={0.01}
                value={opacity}
                onChange={(e) => setOpacity(Number(e.target.value))}
                style={{ verticalAlign: 'middle', marginLeft: 8 }}
              />
              <strong style={{ marginLeft: 8 }}>{opacity}</strong>
            </label>
          </div>

          <div style={{ marginTop: 18 }}>
            <div className="small">Example grid-aligned cards:</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px,1fr))', gap: cellSize / 3, marginTop: 12 }}>
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card" style={{ minHeight: 110 }}>
                  <strong>Card {i + 1}</strong>
                  <div className="small" style={{ marginTop: 8 }}>Snaps to the grid</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}