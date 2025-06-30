import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/Logo.png"
import { Button } from "./ui/button"
import { LogIn } from 'lucide-react';

function Navbar() {
    return (
        <nav className="w-full flex items-center justify-center bg-white fixed top-0">
            <div className="max-w-5xl size-full flex justify-between items-center py-4">
                <Image 
                    src={Logo}
                    alt="Logo TemuDataku"
                    width={100}
                />
                <div className="w-full flex items-center justify-end gap-x-8">
                    <Link href="/">Beranda</Link>  
                    <Link href="/katalog">Katalog</Link>
                    <Link href="/log-in">
                        <Button className="space-x-2 cursor-pointer hover:gap-x-4 bg-emerald-600 font-semibold hover:bg-emerald-500">
                            Masuk <LogIn />
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar