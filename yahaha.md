# ⚡ Lighthouse Speedtest Report
*Captured at 17 Mei 2026, 15.22 WIB*
*Device: Moto G Power (Emulated) with Lighthouse 13.0.1 (Throttle 4G lambat)*

## 📊 Core Web Vitals & Metrics

| Metric | Score / Time | Status |
|---|---|---|
| **First Contentful Paint (FCP)** | 2.6s | 🟡 Perlu Ditingkatkan |
| **Largest Contentful Paint (LCP)** | 5.7s | 🔴 Buruk |
| **Total Blocking Time (TBT)** | 120ms | 🟢 Baik |
| **Cumulative Layout Shift (CLS)** | 0.001 | 🟢 Sangat Baik |
| **Speed Index** | 6.3s | 🔴 Buruk |

---

## 🔍 Insight & Rekomendasi Perbaikan

Lighthouse mendeteksi bahwa **ukuran gambar yang terlalu besar** menjadi penyebab utama lambatnya proses muat halaman (LCP). Jika gambar dioptimalkan, Anda bisa menghemat hingga **~2.339 KiB (2.3 MB)** bandwidth!

### 1. 🖼️ Optimasi Ukuran Gambar (Image Resizing & Compression)
Banyak file gambar yang di-load dalam resolusi aslinya (sangat besar), padahal hanya ditampilkan dalam kotak kecil di layar ponsel. 
**Saran:** Gunakan format **WebP / AVIF** dan ubah dimensinya sesuai dengan tampilan UI.

* **Sertifikat Metro Press Potensi Nutraceutical**
  * Ukuran Asli: `2000x1414` (492 KB)
  * Ditampilkan: `378x267`
  * Potensi Hemat: **476 KB**
* **Sertifikat IDWebhost Stop Desain Ngasal**
  * Ukuran Asli: `1754x1241` (476 KB)
  * Ditampilkan: `378x267`
  * Potensi Hemat: **460 KB**
* **Certificate IDWebhost AI Ads Formula**
  * Ukuran Asli: `1742x1247` (461 KB)
  * Ditampilkan: `378x271`
  * Potensi Hemat: **444 KB**
* **Foto Profil (Avatar Utama)**
  * Ukuran Asli: `3228x3228` (404 KB)
  * Ditampilkan: `104x104`
  * Potensi Hemat: **404 KB** *(Urgensi Tinggi karena LCP)*
* **Sertifikat Lainnya (Urgensi Ushul Fiqih, HIMATEK, Generasi Fragile, Bikin Website)**
  * Rata-rata resolusi `1500x1000` (120-150 KB per gambar)
  * Ditampilkan: `378x267`
  * Potensi Hemat: **~500 KB** total
* **Avatar GitHub**
  * Ukuran Asli: `460x460` (32 KB)
  * Ditampilkan: `40x40`
  * Potensi Hemat: **32 KB** *(Sudah Diperbaiki)*

### 2. 🔗 Kurangi Koneksi `preconnect`
**Peringatan:** Ditemukan lebih dari 4 koneksi preconnect. Koneksi tersebut sebaiknya tidak sering digunakan dan hanya untuk origin yang paling penting.
* **Solusi:** Telah diperbaiki! Koneksi `preconnect` yang tidak terlalu krusial (seperti Spotify & GitHub Avatar) telah diubah menjadi `dns-prefetch`.

### 3. 🎨 Hindari Perubahan Layout Geometri Berulang (Reflow)
* Ditemukan JavaScript yang membaca properti geometri layar, memaksa browser melakukan render ulang (waktu kalkulasi 54md). Hal ini terdeteksi dari widget Spotify iframe (`embed-cdn.spotifycdn.com`).
* **Solusi:** Tidak perlu tindakan khusus untuk hal ini karena 54ms masih dalam batas sangat aman (TBT Anda juga sangat baik yaitu 120ms).

---

## 🛠️ Langkah Eksekusi (Telah / Akan Dilakukan)

1. ✅ **Preconnect Limit:** Sudah diperbaiki di `index.html`.
2. ✅ **GitHub Avatar Resizing:** Sudah ditambahkan parameter `&s=96` pada URL API di `Projects.jsx` agar otomatis diperkecil dari GitHub.
3. ⚠️ **Local Certificates & Avatar:** Anda perlu melakukan kompresi secara manual untuk file di folder `public/sertifikat` dan `public/assets/avatar.jpg`, atau saya bisa buatkan *script* otomatis berbasis `sharp` untuk mengompres (convert ke `.webp` & resize) semua gambar Anda sekaligus jika Anda berkenan.
