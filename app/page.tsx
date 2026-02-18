

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Header />
      <section
        className="min-h-screen flex items-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=A%20professional%20modern%20therapy%20office%20with%20comfortable%20seating%2C%20soft%20natural%20lighting%2C%20calming%20neutral%20colors%2C%20plants%2C%20and%20a%20peaceful%20atmosphere%20that%20promotes%20mental%20wellness%20and%20psychological%20support%2C%20clean%20minimalist%20design%2C%20warm%20and%20inviting%20environment&width=1200&height=800&seq=hero&orientation=landscape')"
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Profesyonel Psikolojik Destek
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
              Güvenli bir ortamda, uzman rehberliğinde kendinizi keşfedin ve yaşam kalitenizi artırın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/randevu" className="bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-800 transition-colors text-center cursor-pointer whitespace-nowrap">
                Randevu Al
              </Link>
              <a href="https://wa.me/905053542205" className="border-2 border-red-700 text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-700 hover:text-white transition-colors text-center cursor-pointer whitespace-nowrap">
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Hizmetlerim
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Her yaştan bireye özel, kanıta dayalı terapi yaklaşımları ile psikolojik destek sunuyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-user-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Bireysel Terapi</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Kişisel sorunlarınızı çözmek için birebir destek
              </p>
              <Link href="/hizmetler/bireysel" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                Detayları Gör →
              </Link>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-parent-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Çocuk & Ergen</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Çocuk ve ergenlere özel gelişim odaklı terapi
              </p>
              <Link href="/hizmetler/cocuk-ergen" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                Detayları Gör →
              </Link>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-heart-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Aile & Çift</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                İlişki sorunları için çift ve aile terapisi
              </p>
              <Link href="/hizmetler/aile-cift" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                Detayları Gör →
              </Link>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-computer-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Online Terapi</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                Evden güvenli ve etkili online psikoloji desteği
              </p>
              <Link href="/hizmetler/online" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                Detayları Gör →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <img
                src="https://static.readdy.ai/image/06461edf5d9b24c66a3431fe58cc857a/d5380a429bf3784a8a28d8ba1b5c2607.jfif"
                alt="Klinik Psikolog Damrenur Günel"
                className="w-full rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Damrenur Günel
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                2021 yılında Gedik Üniversitesi Psikoloji Lisans Programı'ndan mezun olduktan sonra,
                aynı üniversitenin Klinik Psikoloji Yüksek Lisans Programı'na devam ettim ve 2023 yılında
                onur derecesiyle mezun oldum. Travma sonrası stres bozukluğu, depresyon, anksiyete bozuklukları
                üzerine uzmanlaştım.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-700 text-lg"></i>
                  <span className="text-sm sm:text-base text-gray-700">Gedik Üniversitesi Klinik Psikoloji Yüksek Lisans (2023)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-700 text-lg"></i>
                  <span className="text-sm sm:text-base text-gray-700">Travma Sonrası Stres Bozukluğu Uzmanı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-700 text-lg"></i>
                  <span className="text-sm sm:text-base text-gray-700">Depresyon ve Anksiyete Bozuklukları Tedavisi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-red-700 text-lg"></i>
                  <span className="text-sm sm:text-base text-gray-700">Değişim ve Kabul Terapisi Yaklaşımı</span>
                </div>
              </div>
              <Link href="/hakkinda" className="bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-red-800 transition-colors cursor-pointer whitespace-nowrap">
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Neden Beni Seçmelisiniz?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Güvenli, destekleyici ve yargısız bir ortamda kişisel büyümenizi destekliyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-shield-check-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Gizlilik Garantisi</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Tüm görüşmeleriniz tamamen gizli tutulur ve etik kurallara uygun şekilde gerçekleştirilir.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-time-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Esnek Randevu</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Yaşam tarzınıza uygun randevu saatleri ve online görüşme seçenekleri sunuyorum.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="ri-heart-pulse-line text-2xl text-red-700"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Kişisel Yaklaşım</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Her danışanın bireysel ihtiyaçlarına özel, kanıta dayalı terapi yöntemleri uyguluyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Danışan Yorumları
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Terapi sürecimdeki deneyimlerini paylaşan danışanlarımdan geri bildirimler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                "Damrenur Hanım'la yaptığım terapi seansları hayatımı değiştirdi. Kaygı sorunlarımı çözmek için geliştirdiğimiz stratejiler çok etkili oldu."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-red-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Ayşe K.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Bireysel Terapi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                "Evliliğimizde yaşadığımız sorunları çözme konusunda bize çok yardımcı oldu. Eşimle iletişimimiz artık çok daha sağlıklı."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-red-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Mehmet ve Zehra A.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Çift Terapisi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                  <i className="ri-star-fill"></i>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                "Online seanslar sayesinde evden destek alabilmek harika. Çocuğumun gelişim sürecinde çok değerli rehberlik aldık."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-user-line text-red-700"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Fatma Ö.</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Online Terapi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
              İlk Adımı Atmaya Hazır mısınız?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90">
              Psikolojik desteğe ihtiyaç duyduğunuz her konuda yanınızdayım.
              Hemen randevu alın veya WhatsApp'tan bana ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/randevu" className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
                Randevu Al
              </Link>
              <a href="https://wa.me/905053542205" className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-red-700 transition-colors cursor-pointer whitespace-nowrap">
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}