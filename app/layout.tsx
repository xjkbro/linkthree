import Background from '@/components/Background'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jason Kyle De Lara',
  description: 'Linktree clone for Jason Kyle De Lara using ThreeJS and NextJS',
}
export function Head() {
	return (
		<>
			<script defer src="https://umami.jkbro.dev/script.js" data-website-id="f953f557-29ee-49d3-800d-5306238b2535"></script>
		</>
	)
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Background/>
      </body>
    </html>
  )
}
