import './globals.css'

export const metadata = {
  title: 'Dimensions Grid Network',
  description: 'A demo app for the Dimensions Grid Network'
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