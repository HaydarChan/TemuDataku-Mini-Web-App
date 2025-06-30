# TemuDataku Mini Web App

Selamat datang di mini web app TemuDataku — sebuah aplikasi sederhana berbasis Next.js sebagai bagian dari proses technical test.

---

## Fitur

- **Home Page**: menampilkan deskripsi singkat TemuDataku + tombol login  
- **Login Page**: simulasi login dengan username & password bebas  
- **Katalog Produk**: halaman katalog produk yang hanya dapat diakses setelah login  

---

## Struktur Halaman

- `/` → Home Page  
- `/login` → Login Page  
- `/katalog` → Katalog Produk (dengan proteksi login)

---

## Cara Menjalankan Secara Lokal

1. **Clone repository**

   ```bash
   git clone https://github.com/HaydarChan/TemuDataku-Mini-Web-App
   ```

2. **Masuk ke direktori project**

   ```bash
   cd temudataku-mini
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Jalankan development server**

   ```bash
   npm run dev
   ```

5. **Buka di browser**

   ```
   http://localhost:3000
   ```

---

## Akun Demo

- Bebas menggunakan username & password apa saja di halaman login
- Setelah login, Anda akan diarahkan ke halaman katalog produk

---

## Tech Stack

- Next.js (React Framework)
- Zustand (untuk state management login)
- Tailwind CSS (opsional, jika digunakan untuk styling)

---

## Deployment

Silakan akses proyek melalui link Vercel (recommended) atau panduan di atas untuk lokal:  
> https://temu-dataku-mini-web-app.vercel.app/



