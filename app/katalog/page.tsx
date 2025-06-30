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
    <div className='w-full max-w-5xl flex flex-col items-center mt-20 gap-y-12'>
      <div className='w-full flex flex-col items-center gap-y-2 max-w-2xl text-center'>
        <h1 className='text-2xl font-bold text-emerald-800'>Katalog Produk TemuDataku</h1>
        <p>Berikut adalah berbagai produk dan layanan unggulan TemuDataku yang dapat membantu Anda mengoptimalkan pengelolaan data:</p>
      </div>
      <div className='w-full flex items-start justify-between gap-x-4 h-full'>
        <div className='rounded-xl border-2 border-emerald-600 bg-white shadow-md w-full p-4 h-full'>
          <p className='text-xl font-semibold'>TemuData Starter</p>
          <p className='text-muted-foreground'>Solusi data management sederhana untuk usaha mikro dan kecil</p>
          <p className='font-semibold mt-4'>Harga: Rp 150.000/bulan</p>
        </div>
        <div className='rounded-xl border-2 border-emerald-600 bg-white shadow-md w-full p-4 h-full'>
          <p className='text-xl font-semibold'>TemuData Pro</p>
          <p className='text-muted-foreground'>Fitur lanjutan untuk perusahaan dengan kebutuhan analitik data lebih kompleks.</p>
          <p className='font-semibold mt-4'>Harga: Rp 500.000/bulan</p>
        </div>
        <div className='rounded-xl border-2 border-emerald-600 bg-white shadow-md w-full p-4 h-full'>
          <p className='text-xl font-semibold'>TemuData Enterprise</p>
          <p className='text-muted-foreground'>Dukungan penuh dan integrasi skala besar.</p>
          <p className='font-semibold mt-4'>Harga: Hubungi kami</p>
        </div>
      </div>
    </div>
  )
}
