# Muhammad Fikri - Portfolio 2026

## 🚀 Tech Stack
- **Framework:** React 19
- **Build Tool:** Vite 8
- **SEO:** React Helmet Async & JSON-LD Schema
- **Aesthetics:** Minimalist Solid Design (No Transparency, Anti-Focus Ring)

## 🛠️ Cara Menjalankan

### Mode Pengembangan (Development)
Gunakan mode ini saat ingin melakukan perubahan kode.
```bash
npm install
npm run dev
```

### Mode Produksi
Gunakan mode ini untuk melihat kecepatan asli website tanpa overhead development.
```bash
npm run build
npm run preview 
```

## 📝 Cara Mengubah Konten

### 1. Menambah Sertifikat
1. Simpan foto ke `public/sertifikat/` dengan format: `nama-penerbit-event-tanggal.jpg`.
2. Buka `src/components/Certificates.jsx` dan tambahkan data ke array `certificates`.
3. Update `public/sitemap.xml` agar gambar cepat terindeks.

### 2. Update Metadata SEO
Buka `src/components/SEO.jsx` atau `index.html` untuk mengubah judul, deskripsi, atau username media sosial.

### 3. Styling
Semua file CSS berada di folder `src/styles/`. Website ini menggunakan **Vanilla CSS** tanpa framework tambahan untuk menjaga keaslian dan kecepatan.

---
*Built for the future. Optimized for the web.*
