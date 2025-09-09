import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-lg sm:text-xl font-['Pacifico'] text-red-700 mb-4">
              Klinik Psikolog Damrenur Günel
            </div>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Profesyonel psikolojik destek ve terapi hizmetleri
            </p>
            <div className="flex space-x-4">
              <a href="tel:+905053542205" className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
                <i className="ri-phone-line"></i>
              </a>
              <a href="mailto:info@damrenurgunel.com" className="w-10 h-10 bg-red-700 text-white rounded-full flex items-center justify-center hover:bg-red-800 transition-colors cursor-pointer">
                <i className="ri-mail-line"></i>
              </a>
              <a href="https://wa.me/905053542205" className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                <i className="ri-whatsapp-line"></i>
              </a>
              <a href="https://instagram.com/psk.damrenurgunel" className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkinda" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bireysel" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/randevu" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">Hizmetler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/bireysel" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Bireysel Psikoterapi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/cocuk-ergen" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Çocuk & Ergen Terapisi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/aile-cift" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Çift & Evlilik Terapisi
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/online" className="text-xs sm:text-sm text-gray-600 hover:text-red-700 transition-colors cursor-pointer">
                  Online Terapi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-sm sm:text-base">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-red-700"></i>
                <span className="text-xs sm:text-sm text-gray-600">+90 505 354 22 05</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-red-700"></i>
                <span className="text-xs sm:text-sm text-gray-600">info@damrenurgunel.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-red-700 mt-1"></i>
                <span className="text-xs sm:text-sm text-gray-600">
                  Kılıçdede Mahallesi, Çubukçu Sokak No:19/4<br />
                  Mert Plaza, İlkadım, Samsun
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            © 2025 Klinik Psikolog Damrenur Günel. Tüm hakları saklıdır.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Site yapımı <a href="https://www.bayraktaryazilim.com.tr" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 font-semibold cursor-pointer">BAYRAKTAR YAZILIM</a>'a aittir.
          </p>
        </div>
      </div>
    </footer>
  );
}