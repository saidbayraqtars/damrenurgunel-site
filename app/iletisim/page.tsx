import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "İletişim - Klinik Psikolog Damrenur Günel",
    "description": "Klinik Psikolog Damrenur Günel ile iletişim bilgileri ve ofis konumu",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/iletisim` || "https://example.com/iletisim",
    "mainEntity": {
      "@type": "PsychologicalPractice",
      "name": "Klinik Psikolog Damrenur Günel",
      "telephone": "+905053542205",
      "email": "info@damrenurgunel.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kılıçdede Mahallesi, Çubukçu Sokak No:19/4 Mert Plaza",
        "addressLocality": "İlkadım",
        "addressRegion": "Samsun",
        "postalCode": "55200",
        "addressCountry": "TR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "41.2867",
        "longitude": "36.3300"
      },
      "openingHours": [
        "Mo-Fr 09:00-18:00",
        "Sa 09:00-15:00"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+905053542205",
          "contactType": "customer service",
          "availableLanguage": "Turkish"
        },
        {
          "@type": "ContactPoint",
          "email": "info@damrenurgunel.com",
          "contactType": "customer service",
          "availableLanguage": "Turkish"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              İletişim
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sorularınız için bana ulaşabilir, randevu alabilir veya daha fazla bilgi alabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-3xl text-red-700"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telefon</h3>
              <p className="text-gray-600 mb-4">Doğrudan arayarak iletişim kurun</p>
              <a href="tel:+905053542205" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                +90 505 354 22 05
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-whatsapp-line text-3xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Hızlı mesajlaşma için</p>
              <a href="https://wa.me/905053542205" className="text-green-600 font-semibold hover:text-green-700 cursor-pointer">
                Mesaj Gönder
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-3xl text-red-700"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-posta</h3>
              <p className="text-gray-600 mb-4">Detaylı mesajlar için</p>
              <a href="mailto:info@damrenurgunel.com" className="text-red-700 font-semibold hover:text-red-800 cursor-pointer">
                E-posta Gönder
              </a>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-instagram-line text-3xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instagram</h3>
              <p className="text-gray-600 mb-4">Sosyal medya</p>
              <a href="https://instagram.com/psk.damrenurgunel" className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
                Takip Et
              </a>
            </div>
          </div>

          <div className="text-center">
            <a href="/randevu" className="bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-800 transition-colors cursor-pointer inline-flex items-center whitespace-nowrap">
              Hemen Randevu Al
              <i className="ri-calendar-line ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ofis Bilgileri
            </h2>
            <p className="text-lg text-gray-600">
              Merkezi konumdaki modern ofisimde sizi ağırlamaktan mutluluk duyarım
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Adres & İletişim
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <i className="ri-map-pin-line text-red-700 text-2xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Ofis Adresi</h4>
                      <p className="text-gray-600">
                        Kılıçdede Mahallesi, Çubukçu Sokak No:19/4<br />
                        Mert Plaza, İlkadım, Samsun 55200
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <i className="ri-phone-line text-red-700 text-2xl"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
                      <p className="text-gray-600">+90 505 354 22 05</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <i className="ri-mail-line text-red-700 text-2xl"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">E-posta</h4>
                      <p className="text-gray-600">info@damrenurgunel.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Çalışma Saatleri
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Pazartesi - Cuma</span>
                    <span className="text-gray-600">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Cumartesi</span>
                    <span className="text-gray-600">09:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-900">Pazar</span>
                    <span className="text-red-500">Kapalı</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-800">
                    <i className="ri-information-line mr-2"></i>
                    Acil durumlar için WhatsApp üzerinden 7/24 ulaşabilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.234567890123!2d36.3300000!3d41.2867000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877c4b2e3c6d7%3A0x4d3f8a9b5c6e7f8a!2zS8SxbMSxw6dkZWRlLCDDh3VidWtjdSBTay4sIDU1MjAwIMSwbGthZMSxbS9TYW1zdW4sIFTDvHJraXll!5e0!3m2!1str!2str!4v1704067200000!5m2!1str!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ofis Konumu - Kılıçdede Mahallesi, Samsun"
                ></iframe>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ulaşım Bilgileri
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <i className="ri-bus-line text-red-700 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Minibüs</h4>
                      <p className="text-gray-600">İlkadım merkez hattı - 2 dk yürüyüş</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="ri-bus-line text-red-700 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Otobüs</h4>
                      <p className="text-gray-600">İlkadım durağı - 3 dk yürüyüş</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <i className="ri-car-line text-red-700 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Araç Park</h4>
                      <p className="text-gray-600">Çevrede uygun park alanları mevcut</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-lg text-gray-600">
              En çok merak edilen konular hakkında bilgiler
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  İlk seans nasıl geçer?
                </h3>
                <p className="text-gray-600">
                  İlk seansımızda tanışır, mevcut durumunuzu değerlendiririz ve size en uygun terapi yaklaşımını belirleriz.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Seans süresi ne kadar?
                </h3>
                <p className="text-gray-600">
                  Standart seans süresi 50 dakikadır. İhtiyaca göre bu süre ayarlanabilir.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Online seans mümkün mü?
                </h3>
                <p className="text-gray-600">
                  Evet, güvenli video konferans platformları üzerinden online seanslar düzenliyorum.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Gizlilik nasıl korunur?
                </h3>
                <p className="text-gray-600">
                  Tüm görüşmelerimiz tam gizlilik prensipleri çerçevesinde gerçekleşir ve kayıt altına alınmaz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
