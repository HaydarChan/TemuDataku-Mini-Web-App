'use client'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'next/navigation'

export default function KatalogPage() {
    const router = useRouter()
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  if (!isLoggedIn) {
    router.push("/log-in")
  }

  return (
    <div>
      <h1>Katalog Produk TemuDataku</h1>
      <ul>
        <li>TemuData Starter</li>
        <li>TemuData Pro</li>
        <li>TemuData Enterprise</li>
      </ul>
    </div>
  )
}
