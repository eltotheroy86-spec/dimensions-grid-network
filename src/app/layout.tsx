import './globals.css'

export const metadata = {
  title: 'Dimensional Grid',
  description: 'A REVOLUTIONARY Global Network Provider with Wallet, Rewards and Apps.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh' }}>{children}</main>
      </body>
    </html>
  )
}
