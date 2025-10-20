import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login - GESTK Client',
  description: 'Faça login na plataforma GESTK Client',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
