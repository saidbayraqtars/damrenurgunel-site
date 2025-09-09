
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function FamilyCoupleTherapy() {
  const services = [
    {
      title: "Evlilik Terapisi",
      description: "İletişim problemleri, çatışma çözümü ve ilişkiyi güçlendirme teknikleri",
      icon: "ri-heart-2-line",
      color: "red",
      whatsappText: "evlilik terapisi konusunda bilgi almak istiyorum"
    },
    {
      title: "Çift Danışmanlığı",
      description: "İlişki sorunları, güven problemleri ve duygusal bağ kurma desteği",
      icon: "ri-hearts-line",
      color: "pink",
      whatsappText: "çift danışmanlığı için yardım almak istiyorum"
    },
    {
      title: "Aile İçi İletişim",
      description: "Aile üyeleri arası sağlıklı iletişim kurma ve çatışma yönetimi",
      icon: "ri-team-line",
      color: "red",
      whatsappText: "aile içi iletişim problemleri için destek istiyorum"
    },
    {
      title: "Boşanma Süreci Danışmanlığı",
      description: "Boşanma sürecinde duygusal destek ve çocukları koruma stratejileri",
      icon: "ri-user-unfollow-line",
      color: "orange",
      whatsappText: "boşanma süreci danışmanlığı almak istiyorum"
    },
    {
      title: "Çocuklu Aileler",
      description: "Ebeveynlik becerileri, disiplin yöntemleri ve aile dinamikleri",
      icon: "ri-parent-line",
      color: "maroon",
      whatsappText: "ebeveynlik danışmanlığı için yardım istiyorum"
    },
    {
      title: "Ergen Çocuklu Aileler",
      description: "Ergenlik dönemi zorluklarıyla başa çıkma ve aile uyumu",
      icon: "ri-user-star-line",
      color: "crimson",
      whatsappText: "ergen çocuklu aile danışmanlığı almak istiyorum"
    },
    {
      title: "Kayınvalide İlişkileri",
      description: "Geniş aile ile ilişkiler, sınır koyma ve uyum problemleri",
      icon: "ri-group-line",
      color: "burgundy",
      whatsappText: "aile içi ilişki problemleri için destek istiyorum"
    },
    {
      title: "Aldatma ve Güven",
      description: "Güven yeniden inşası, aldatma travması ve ilişkiyi onarma",
      icon: "ri-shield-cross-line",
      color: "red",
      whatsappText: "güven problemleri konusunda yardım almak istiyorum"
    },
    {
      title: "Cinsel Terapi",
      description: "Cinsel problemler, yakınlık sorunları ve cinsel uyum",
      icon: "ri-love-line",
      color: "pink",
      whatsappText: "cinsel terapi konusunda bilgi almak istiyorum"
    },
    {
      title: "Ekonomik Stres",
      description: "Mali problemlerin ilişkiye etkisi ve stres yönetimi",
      icon: "ri-money-dollar-circle-line",
      color: "orange",
      whatsappText: "ekonomik stres danışmanlığı almak istiyorum"
    },
    {
      title: "Kültürel Farklılıklar",
      description: "Farklı kültürlerden çiftlerin uyum ve anlayış geliştirme süreci",
      icon: "ri-global-line",
      color: "maroon",
      whatsappText: "kültürel farklılık danışmanlığı istiyorum"
    },
    {
      title: "Evlilik Öncesi Danışmanlık",
      description: "Evlilik hazırlığı, beklenti yönetimi ve ilişki temelleri",
      icon: "ri-gift-line",
      color: "crimson",
      whatsappText: "evlilik öncesi danışmanlık almak istiyorum"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-200 text-red-800",
      pink: "bg-pink-200 text-pink-800",
      orange: "bg-orange-200 text-orange-800",
      maroon: "bg-red-300 text-red-900",
      crimson: "bg-rose-200 text-rose-800",
      burgundy: "bg-red-200 text-red-900"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const handleServiceClick = (whatsappText: string) => {
    const message = `Merhaba, ${whatsappText}. Randevu almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905053542205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=warm%20family%20and%20couple%20therapy%20consultation%20room%20with%20comfortable%20seating%20arrangements%20for%20multiple%20people%2C%20soft%20lighting%20Creates%20cozy%20atmosphere%2C%20modern%20therapeutic%20space%20designed%20for%20relationship%20counseling%20sessions&width=1920&height=600&seq=family-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-900/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Aile & Çift Terapisi
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
              İlişkilerinizi güçlendirin, aile bağlarınızı onarın. Çiftler ve aileler için 
              profesyonel terapi hizmetleri ile sağlıklı iletişim kurmanıza yardımcı oluyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleServiceClick("aile ve çift terapisi hakkında bilgi almak istiyorum")}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer text-center whitespace-nowrap flex items-center justify-center"
              >
                WhatsApp'tan Destek Al
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
              <Link href="/randevu" className="bg-red-600/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-red-600/30 transition-colors cursor-pointer text-center whitespace-nowrap">
                Randevu Formu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Moved Up */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50 to-rose-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-6">
                <i className="ri-question-line text-2xl"></i>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Merak Ettikleriniz
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Aile ve çift terapisi hakkında sık sorulan sorular
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-heart-2-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Çift terapisi ne kadar sürer?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      İlişkinizdeki problemlerin karmaşıklığına bağlı olarak 8-20 seans arasında değişir. 
                      İlk 3-4 seansta belirgin iyileşme görülmeye başlar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-team-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Aile terapisine kimler katılır?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Problemin doğasına göre tüm aile üyeleri, sadece ebeveynler veya 
                      belirli aile üyeleri katılabilir. Bu durum terapi sürecinde belirlenir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Gizlilik nasıl korunur?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Terapi sürecindeki tüm bilgiler tamamen gizlidir. Yasal zorunluluklar 
                      dışında, izniniz olmadan hiçbir bilgi paylaşılmaz.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-calendar-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Seanslar ne sıklıkta yapılır?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Genellikle haftada bir kez 50-90 dakikalık seanslar şeklinde başlarız. 
                      İlerleme durumuna göre sıklık ayarlanır.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Aile & Çift Terapi Hizmetlerim
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              İlişki dinamiklerinizi iyileştirmek için kapsamlı terapi yaklaşımları
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
                onClick={() => handleServiceClick(service.whatsappText)}
              >
                <div className={`w-12 h-12 ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Types */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terapi Türlerim
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-pink-200 text-pink-800 rounded-full flex items-center justify-center mb-6">
                <i className="ri-hearts-line text-2xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Çift Terapisi
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                İkili ilişkilerde yaşanan problemlerin çözümü için özel olarak tasarlanmış terapi yaklaşımları. 
                İletişim becerilerini geliştirme, çatışma yönetimi ve duygusal bağ güçlendirme odaklı çalışmalar.
              </p>
              <button
                onClick={() => handleServiceClick("çift terapisi için randevu almak istiyorum")}
                className="bg-pink-700 text-white px-6 py-3 rounded-lg hover:bg-pink-800 transition-colors cursor-pointer text-sm font-semibold flex items-center whitespace-nowrap"
              >
                WhatsApp'tan İletişim
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-red-200 text-red-800 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-2xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                Aile Terapisi
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Tüm aile üyelerinin katıldığı sistem odaklı terapi yaklaşımı. Aile dinamiklerini iyileştirme, 
                roller ve sorumlulukları netleştirme, sağlıklı iletişim kurma becerileri geliştirme.
              </p>
              <button
                onClick={() => handleServiceClick("aile terapisi için randevu almak istiyorum")}
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors cursor-pointer text-sm font-semibold flex items-center whitespace-nowrap"
              >
                WhatsApp'tan İletişim
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            İlişkilerinizi güçlendirmeye hazır mısınız?
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Aile ve çift terapisi ile ilişkilerinizde pozitif değişim yaratın. WhatsApp'tan hızla iletişime geçin.
          </p>
          <button 
            onClick={() => handleServiceClick("aile ve çift terapisi için randevu almak istiyorum")}
            className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-red-50 transition-colors cursor-pointer inline-flex items-center whitespace-nowrap"
          >
            Hemen Destek Al
            <i className="ri-whatsapp-line ml-2 text-green-600"></i>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
