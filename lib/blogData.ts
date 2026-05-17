export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "apa-itu-vibe-coding",
    title: "Apa Itu Vibe Coding?",
    date: "2026-05-17",
    excerpt:
      "Vibe Coding adalah tren terbaru di dunia pengembangan perangkat lunak yang menggabungkan coding dengan mood dan suasana hati. Simak penjelasan lengkapnya di sini.",
    content: `
Vibe Coding adalah istilah yang muncul di komunitas developer untuk menggambarkan aktivitas coding sambil mendengarkan musik atau berada dalam suasana yang sesuai dengan mood, sehingga meningkatkan fokus dan produktivitas.

## Kenapa Vibe Coding?

Banyak developer merasa bahwa musik membantu mereka masuk ke dalam *flow state* — kondisi di mana pikiran benar-benar fokus pada kode yang ditulis. Dengan memilih playlist yang tepat, kamu bisa:

- Meningkatkan konsentrasi saat debugging
- Mengurangi stres dari deadline yang ketat
- Memblokir distraksi dari lingkungan sekitar
- Meningkatkan kreativitas dalam memecahkan masalah

## Tips Memulai Vibe Coding

### 1. Pilih Musik yang Tepat
Tidak semua musik cocok untuk coding. Beberapa genre yang populer:

- **Lo-fi Hip Hop** — Tempo lambat, tidak mengganggu
- **Ambient / Electronic** — Cocok untuk sesi coding panjang
- **Jazz Instrumental** — Hangat dan menenangkan
- **Classical Music** — Terbukti membantu fungsi kognitif

### 2. Atur Lingkungan
Pastikan meja kerja rapi, pencahayaan nyaman, dan siapkan minuman favoritmu.

### 3. Gunakan Headphone
Headphone noise-canceling bisa membantu kamu lebih fokus dan larut dalam kode.

## Kesimpulan

Vibe coding bukan tentang aturan baku, tapi tentang menemukan ritme dan suasana yang paling cocok untuk dirimu. Cobalah berbagai genre musik, atur lingkungan kerja senyaman mungkin, dan lihat sendiri bagaimana produktivitas coding-mu meningkat.

Selamat mencoba dan tetap coding dengan vibe terbaik!
    `.trim(),
  },
  {
    slug: "memulai-karir-sebagai-frontend-developer",
    title: "Memulai Karir Sebagai Frontend Developer",
    date: "2026-05-10",
    excerpt:
      "Panduan lengkap untuk memulai karir sebagai frontend developer di tahun 2026, dari skill yang harus dikuasai hingga tips mendapatkan pekerjaan pertama.",
    content: `
Frontend developer adalah salah satu profesi yang paling dicari di industri teknologi. Tapi bagaimana cara memulainya? Artikel ini akan membahas langkah-langkah konkret yang bisa kamu ambil.

## Skill Wajib Frontend Developer

### 1. HTML, CSS, JavaScript
Ini adalah fondasi utama. Kuasai semantic HTML, CSS Flexbox/Grid, dan JavaScript modern (ES6+).

### 2. Framework
Pilih salah satu framework utama:
- **React** — Paling populer, banyak lowongan
- **Vue** — Mudah dipelajari, cocok untuk pemula
- **Next.js** — React framework untuk production-grade apps

### 3. Version Control
Git dan GitHub adalah mandatory skill. Pelajari branching, pull request, dan kolaborasi tim.

### 4. Tools Lainnya
- Package manager (npm/yarn/pnpm)
- Build tools (Vite, Webpack)
- Testing (Jest, Cypress)

## Cara Mendapatkan Pengalaman

1. **Buat portfolio** — Tunjukkan hasil karyamu
2. **Kontribusi open source** — Cari issue label "good first issue"
3. **Freelance kecil-kecilan** — Ambil proyek sederhana di platform freelance

## Kesimpulan

Karir sebagai frontend developer sangat menjanjikan. Kuncinya adalah konsisten belajar dan terus membuat proyek. Jangan menunggu sampai "siap" — mulai saja dari sekarang!
    `.trim(),
  },
];
