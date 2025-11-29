import React from 'react'

type Props = {
  size?: number
  color?: string
  opacity?: number
  show?: boolean
  style?: React.CSSProperties
}

export default function GridBackground({
  size = 48,
  color = 'rgba(255,255,255,0.06)',
  opacity = 0.12,
  show = true,
  style
}: Props) {
  if (!show) return null

  const bgStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    pointerEvents: 'none',
    backgroundImage: `
      linear-gradient(to right, ${color} 1px, transparent 1px),
      linear-gradient(to bottom, ${color} 1px, transparent 1px)
    `,
    backgroundSize: `${size}px ${size}px, ${size}px ${size}px`,
    opacity,
    transition: 'opacity 180ms ease, background-size 180ms ease',
    ...style
  }

  return <div aria-hidden="true" style={bgStyle} />
}