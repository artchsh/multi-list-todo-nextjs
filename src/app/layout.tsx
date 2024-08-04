import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Multi-List Todo App',
	description: 'A flexible, multi-list todo application built with Next.js and shadcn/ui',
	manifest: '/manifest.json',
	themeColor: '#4a90e2'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='manifest' href='/manifest.json' />
				<meta name='theme-color' content='#4a90e2' />
			</head>
			<body className={inter.className}>
				{children}
				<Toaster />
			</body>
		</html>
	)
}
