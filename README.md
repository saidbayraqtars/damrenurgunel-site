# 🧠 Klinik Psikolog Damrenur Günel — Web Sitesi

Klinik Psikolog **Damrenur Günel**'in profesyonel web sitesi. Bireysel terapi, aile/çift terapisi, çocuk-ergen psikolojisi ve online terapi hizmetlerini tanıtan, SEO uyumlu, statik olarak dışa aktarılan (static export) modern bir Next.js uygulamasıdır.

🌐 **Canlı Site:** [klinikpsikologdamrenurgunel.com.tr](https://www.klinikpsikologdamrenurgunel.com.tr)

---

## 📋 İçerik

- [Özellikler](#-özellikler)
- [Teknoloji](#-teknoloji)
- [Kurulum](#-kurulum)
- [Proje Yapısı](#-proje-yapısı)
- [Sayfalar](#-sayfalar)
- [SEO & Performans](#-seo--performans)
- [Deploy](#-deploy)

---

## ✨ Özellikler

| Özellik | Açıklama |
|---|---|
| 📱 **Responsive Tasarım** | Mobil, tablet ve masaüstü cihazlara uyumlu |
| 🔍 **SEO Optimizasyonu** | Her sayfa için metadata, Open Graph, JSON-LD yapısal veri |
| 📝 **Blog** | Psikoloji konularında makaleler |
| 📅 **Online Randevu** | WhatsApp üzerinden randevu formu |
| 🗺️ **İletişim** | Google Maps entegrasyonu ile ofis konumu |
| 🏷️ **Yapısal Veri** | Schema.org uyumlu JSON-LD |
| ⚡ **Statik Export** | CDN'den sunulabilecek hızlı statik dosyalar |

---

## 🛠 Teknoloji

| Teknoloji | Versiyon | Kullanım |
|---|---|---|
| [Next.js](https://nextjs.org) | 15.3 | React framework, App Router |
| [React](https://react.dev) | 19 | UI bileşenleri |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utility-first CSS |
| [TypeScript](https://www.typescriptlang.org) | 5+ | Tip güvenliği |
| [Remixicon](https://remixicon.com) | 4.5 | İkon seti |

---

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+
- npm, yarn, pnpm veya bun

### Adımlar

```bash
# 1. Repoyu klonlayın
git clone https://github.com/saidbayraqtars/damrenurgunel-site.git
cd damrenurgunel-site

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) adresini açın.

### Diğer Komutlar

```bash
npm run build    # Statik export oluştur (out/ klasörüne)
npm run start    # Production sunucuyu başlat
npm run lint     # ESLint ile kod kontrolü
```

---

## 📁 Proje Yapısı

```
damrenurgunel-site/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fontlar
│   ├── page.tsx            # Ana sayfa
│   ├── not-found.tsx       # 404 sayfası
│   ├── globals.css         # Global stiller
│   ├── blog/               # Blog sayfası
│   ├── hakkinda/           # Hakkımda sayfası
│   ├── hizmetler/          # Hizmet sayfaları
│   │   ├── bireysel/       # Bireysel terapi
│   │   ├── aile-cift/      # Aile & çift terapisi
│   │   ├── cocuk-ergen/    # Çocuk & ergen psikolojisi
│   │   └── online/         # Online terapi
│   ├── iletisim/           # İletişim sayfası
│   └── randevu/            # Randevu formu
├── components/
│   ├── Header.tsx          # Navigasyon (dropdown menü)
│   └── Footer.tsx          # Footer
├── public/
│   ├── robots.txt          # Arama motoru kuralları
│   └── sitemap.xml         # Site haritası
├── next.config.ts          # Next.js yapılandırması
├── tailwind.config.js      # Tailwind CSS yapılandırması
└── package.json
```

---

## 📄 Sayfalar

| Sayfa | Yol | Açıklama |
|---|---|---|
| Ana Sayfa | `/` | Hero, hizmetler, hakkında önizleme, referanslar, CTA |
| Hakkımda | `/hakkinda` | Eğitim, deneyim, uzmanlık alanları, sertifikalar |
| Bireysel Terapi | `/hizmetler/bireysel` | Kaygı, depresyon, travma, OKB tedavileri |
| Aile & Çift | `/hizmetler/aile-cift` | İlişki terapisi, evlilik danışmanlığı |
| Çocuk & Ergen | `/hizmetler/cocuk-ergen` | Çocuk/ergen psikolojisi hizmetleri |
| Online Terapi | `/hizmetler/online` | Uzaktan terapi seçenekleri |
| Blog | `/blog` | Psikoloji makaleleri |
| İletişim | `/iletisim` | Adres, telefon, harita |
| Randevu | `/randevu` | WhatsApp randevu formu |

---

## 🔍 SEO & Performans

- ✅ Her sayfada benzersiz `<title>`, `<meta description>`, `keywords`
- ✅ Open Graph ve Twitter Card desteği
- ✅ Schema.org JSON-LD yapısal veri (Person, MedicalBusiness, BlogPosting)
- ✅ `robots.txt` ve `sitemap.xml`
- ✅ Semantic HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`)
- ✅ Google Fonts (Geist, Pacifico) — `next/font` ile optimize
- ✅ Static export ile CDN-ready
- ✅ Tailwind CSS ile minimal CSS bundle

---

## 🌍 Deploy

Proje `output: "export"` ile statik dosyalar (HTML/CSS/JS) üretir. Herhangi bir statik hosting servisinde barındırılabilir:

```bash
npm run build
# Çıktı: out/ klasörü
```

### Desteklenen Platformlar
- **Vercel** (önerilen — otomatik deploy)
- **Netlify**
- **GitHub Pages**
- **Cloudflare Pages**
- Herhangi bir statik dosya sunucusu

---

## 📞 İletişim

**Klinik Psikolog Damrenur Günel**
- 📍 Kılıçdede Mah., Çubukçu Sok. No:19/4, Mert Plaza, İlkadım/Samsun
- 📞 +90 (553) 459 14 73
- 📧 klinikpsikologdamrenurgunel@gmail.com
- 🌐 [klinikpsikologdamrenurgunel.com.tr](https://www.klinikpsikologdamrenurgunel.com.tr)

---

## 📝 Lisans

Bu proje özel kullanım amaçlıdır. Tüm hakları saklıdır.
