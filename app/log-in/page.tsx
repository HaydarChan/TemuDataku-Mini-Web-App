import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LogInPage() {
    return (
        <div className="w-screen h-screen bg-gradient-to-br from-emerald-400 to-emerald-100 flex flex-col items-center justify-center">
            <div className="bg-white rounded-xl px-12 py-6 shadow-lg flex flex-col max-w-lg gap-y-4">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-emerald-900">Masuk ke TemuDataku</h1>
                    <h3 className="text-muted-foreground text-sm">Silakan masukkan akun Anda untuk mulai menggunakan TemuDataku</h3>
                </div>
                <div className="space-y-2">
                    <Input placeholder="Username" className="focus-visible:ring-transparent focus-visible:outline-none" />
                    <Input placeholder="Password" className="focus-visible:ring-transparent focus-visible:outline-none" />
                </div>
                <Button className="bg-emerald-900 cursor-pointer hover:bg-emerald-800 font-semibold">
                    Log In
                </Button>
            </div>
        </div>
    )
}