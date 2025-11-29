'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to Dimensions Grid Network</h1>
      <p>This is your test launch UI. From here, users can:</p>
      <ul>
        <li><Link href="/credit-packs">📦 View & Buy Credit Packs</Link></li>
        <li><Link href="/grid/overlay">🌐 Launch Grid Overlay</Link></li>
        <li><Link href="/wallet">💰 View Wallet</Link></li>
        <li><Link href="/signup">📝 Sign Up</Link></li>
      </ul>
    </main>
  )
}
