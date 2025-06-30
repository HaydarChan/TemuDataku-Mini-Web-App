'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/authStore";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LogInPage() {
    const router = useRouter()
    const login = useAuthStore((state) => state.login)

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login()
        router.push("/katalog")
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-emerald-400 to-emerald-100 flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl px-12 py-6 shadow-lg flex flex-col max-w-lg gap-y-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-emerald-900">Masuk ke TemuDataku</h1>
                    <h3 className="text-muted-foreground text-sm">Silakan masukkan akun Anda untuk mulai menggunakan TemuDataku</h3>
                </div>
                <form onSubmit={handleLogin} className="w-full space-y-4">
                    <div className="space-y-2">
                        <Input placeholder="Username" className="focus-visible:ring-transparent focus-visible:outline-none" required />
                        <Input placeholder="Password" type="password" className="focus-visible:ring-transparent focus-visible:outline-none" required />
                    </div>
                    <Button type="submit" className="bg-emerald-900 cursor-pointer hover:bg-emerald-800 font-semibold w-full">
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    )
}