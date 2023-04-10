import './globals.css'

export const metadata = {
  title: 'KKANBU - ninja?',
  description: 'KKANBU 1 han da',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
