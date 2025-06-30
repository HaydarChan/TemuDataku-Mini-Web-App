import Image from "next/image";
import HeroImage from "@/public/HeroImage.webp"
import { Button } from "@/components/ui/button";
import { LogIn } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <div className="size-full max-w-5xl relative h-screen flex flex-col items-center gap-y-4">
      <Image 
        src={HeroImage}
        alt="Hero Image"
        className="object-cover w-full h-[600px] rounded-2xl absolute shadow-md -z-20"
      />
      <div className="flex flex-col items-center gap-y-2 max-w-3xl pt-[20%]">
        <h1 className="text-center font-bold text-white text-4xl">Selamat Datang di TemuDataku</h1>
        <h3 className="text-center text-white">TemuDataku adalah platform modern untuk mengelola, menata, dan menemukan data dengan mudah. Kami membantu UMKM, profesional, dan komunitas untuk meningkatkan produktivitas melalui data yang terstruktur dan aman.</h3>
      </div>
      <Link href={"/log-in"}>
        <Button size={"lg"} className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 font-semibold flex gap-x-2 hover:gap-x-4">Masuk ke Aplikasi <LogIn/></Button>    
      </Link>
    </div>
  );
}
