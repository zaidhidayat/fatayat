# Website Fatayat NU Kejajar

Website yang responsif dan dinamis untuk organisasi Fatayat NU Kejajar dengan tema warna hijau, putih, hitam, dan emas.

## Fitur

### 🎨 Desain & UI
- **Responsif**: Tampilan optimal di smartphone, tablet, dan desktop
- **Tema Warna**: Hijau (#2E7D32), Putih (#FFFFFF), Hitam (#000000), dan Emas (#FFD700)
- **Animasi Dinamis**: Transisi halus dan animasi interaktif
- **Modern UI**: Desain bersih dengan gradient dan shadow effects

### 📱 Navigasi
- **4 Bagian Utama**:
  - **Beranda**: Dashboard dengan overview data
  - **Sejarah**: Timeline perjalanan organisasi
  - **Data Donatur**: Tabel dan informasi donatur
  - **Data Penerima**: Tabel dan informasi penerima bantuan

### 📊 Integrasi Data Spreadsheet
- **Kotak Data Dinamis**: Menampilkan data dari cell tertentu di spreadsheet
- **Dashboard Real-time**: 4 kartu data utama (Total Donatur, Penerima, Donasi, Program)
- **Tabel Interaktif**: Data donatur dan penerima dengan status
- **Auto-refresh**: Simulasi pembaruan data otomatis

### 📋 Komponen Data
1. **Dashboard Cards**:
   - Total Donatur
   - Total Penerima 
   - Total Donasi
   - Program Aktif

2. **Kotak Cell Spreadsheet**:
   - Donatur Terbaru
   - Donasi Terbesar
   - Kategori Donasi
   - Penerima Terbaru
   - Program Terbaru
   - Wilayah Prioritas

3. **Tabel Data**:
   - Tabel Donatur (Nama, Jumlah, Tanggal, Status)
   - Tabel Penerima (Nama, Program, Wilayah, Status)

## 🔧 Teknologi
- **HTML5**: Struktur semantik dan accessibility
- **CSS3**: Flexbox, Grid, Custom Properties, Responsive Design
- **JavaScript ES6+**: Interaktivity, DOM manipulation, Animation
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter)

## 📱 Responsivitas
- **Desktop** (1024px+): Layout grid penuh
- **Tablet** (768px-1024px): Layout adaptif
- **Mobile** (< 768px): Layout stack dengan menu hamburger

## 🔄 Fitur JavaScript
- Navigation dinamis dengan hash routing
- Mobile menu toggle
- Smooth transitions antar section
- Loading animations untuk data
- Intersection Observer untuk scroll animations
- Simulasi real-time data updates

## 📈 Integrasi Spreadsheet
Website ini dipersiapkan untuk integrasi dengan Google Sheets API:

```javascript
// Template untuk Google Sheets API
function connectToGoogleSheets() {
    // Implementasi API call ke Google Sheets
    // Fetch data dari cell tertentu
    // Update UI elements secara real-time
}
```

## 🚀 Cara Penggunaan
1. Buka `index.html` di browser
2. Navigate menggunakan menu atau tombol
3. Data akan load secara otomatis (saat ini menggunakan sample data)
4. Untuk integrasi spreadsheet nyata, implementasikan Google Sheets API

## 📞 Kontak & Support
Website ini dibuat untuk Fatayat NU Kejajar dengan fitur lengkap dan design modern yang dapat diadaptasi sesuai kebutuhan organisasi.

## 🎯 Keunggulan
- ✅ Fully responsive di semua device
- ✅ Loading animation yang smooth
- ✅ Color scheme sesuai permintaan
- ✅ Ready untuk integrasi spreadsheet
- ✅ Modern & professional design
- ✅ Accessible dan SEO friendly