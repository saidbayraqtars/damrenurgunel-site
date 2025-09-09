
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function ChildAdolescentTherapy() {
  const services = [
    {
      title: "Davranış Problemleri",
      description: "Saldırganlık, itaatsizlik, öfke nöbetleri ve uygunsuz davranışların düzenlenmesi",
      icon: "ri-user-settings-line",
      color: "red",
      whatsappText: "Çocuğumun davranış problemleri hakkında bilgi almak istiyorum"
    },
    {
      title: "Dikkat Eksikliği ve Hiperaktivite (DEHB)",
      description: "Dikkatsizlik, hiperaktivite ve dürtüsellik problemlerinin yönetimi",
      icon: "ri-focus-3-line",
      color: "orange",
      whatsappText: "DEHB konusunda destek almak istiyorum"
    },
    {
      title: "Kaygı Bozuklukları",
      description: "Ayrılma kaygısı, sosyal kaygı, okul korkusu ve genel kaygı problemleri",
      icon: "ri-heart-pulse-line",
      color: "maroon",
      whatsappText: "Çocuğumun kaygı problemleri için yardım istiyorum"
    },
    {
      title: "Depresyon ve Duygudurum Bozuklukları",
      description: "Üzüntü, motivasyon kaybı, enerji düşüklüğü ve duygusal problemler",
      icon: "ri-emotion-sad-line",
      color: "crimson",
      whatsappText: "Çocuğumun depresyon belirtileri için destek almak istiyorum"
    },
    {
      title: "Travma Sonrası Stres",
      description: "Kötü deneyimler sonrası oluşan travma ve stres tepkilerinin tedavisi",
      icon: "ri-shield-cross-line",
      color: "burgundy",
      whatsappText: "Travma sonrası destek için randevu almak istiyorum"
    },
    {
      title: "Okul Problemleri",
      description: "Okul reddi, akademik başarısızlık, öğretmen-öğrenci çatışmaları",
      icon: "ri-school-line",
      color: "red",
      whatsappText: "Okul problemleri konusunda yardım almak istiyorum"
    },
    {
      title: "Sosyal Beceri Eksiklikleri",
      description: "Arkadaşlık kurma, iletişim becerileri ve sosyal uyum problemleri",
      icon: "ri-team-line",
      color: "maroon",
      whatsappText: "Sosyal beceri gelişimi için destek istiyorum"
    },
    {
      title: "Ergen Kimlik Krizi",
      description: "Kimlik arayışı, benlik saygısı ve ergenlik dönemi zorluklarıyla başa çıkma",
      icon: "ri-user-search-line",
      color: "crimson",
      whatsappText: "Ergenlik dönemi sorunları için yardım almak istiyorum"
    },
    {
      title: "Yeme Bozuklukları",
      description: "Anoreksiya, bulimia ve diğer yeme davranışı problemleri",
      icon: "ri-restaurant-line",
      color: "orange",
      whatsappText: "Yeme bozuklukları konusunda destek almak istiyorum"
    },
    {
      title: "Uyku Problemleri",
      description: "Uykusuzluk, gece korkuları, uyku düzeni bozuklukları",
      icon: "ri-moon-line",
      color: "burgundy",
      whatsappText: "Uyku problemleri için yardım istiyorum"
    },
    {
      title: "Otizm Spektrum Bozuklukları",
      description: "Sosyal iletişim, tekrarlayıcı davranışlar ve uyum problemlerinde destek",
      icon: "ri-puzzle-line",
      color: "red",
      whatsappText: "Otizm spektrum desteği almak istiyorum"
    },
    {
      title: "Gelişimsel Gecikmeler",
      description: "Motor, bilişsel, dil ve sosyal gelişim alanlarında gecikmeler",
      icon: "ri-seedling-line",
      color: "maroon",
      whatsappText: "Gelişimsel gecikme konusunda bilgi almak istiyorum"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: "bg-red-200 text-red-800",
      orange: "bg-orange-200 text-orange-800",
      maroon: "bg-red-300 text-red-900",
      crimson: "bg-rose-200 text-rose-800",
      burgundy: "bg-red-200 text-red-900"
    };
    return colors[color as keyof typeof colors] || colors.red;
  };

  const handleServiceClick = (text: string) => {
    const message = `Merhaba, ${text}. Randevu almak istiyorum.`;
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
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=cheerful%20child%20and%20adolescent%20therapy%20room%20with%20colorful%20toys%2C%20art%20supplies%2C%20comfortable%20seating%20for%20families%2C%20bright%20natural%20lighting%2C%20modern%20child-friendly%20therapeutic%20environment%20with%20playful%20elements&width=1920&height=600&seq=child-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-900/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Çocuk & Ergen Psikolojisi
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
              Çocuğunuzun sağlıklı gelişimi için uzman psikolojik destek. 
              Her yaş grubuna özel terapi yaklaşımları ile çocuğunuzun potansiyelini keşfetmesine yardımcı oluyorum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleServiceClick("çocuk ve ergen terapisi hakkında bilgi almak istiyorum")}
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
                Aileler Merak Ediyor
              </h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Çocuk ve ergen psikolojisi hakkında sık sorulan sorular
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-heart-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Çocuğum terapiye ihtiyaç duyuyor mu?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Davranış değişiklikleri, okul problemleri, uyku sorunları, aşırı kaygı veya üzüntü belirtileri 
                      gözlemliyorsanız, uzman değerlendirmesi faydalı olabilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-gamepad-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Çocuk terapisi nasıl yapılır?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Yaşa uygun oyun terapisi, sanat terapisi ve konuşma teknikleri kullanılır. 
                      Çocuklar oyun oynayarak ve yaratıcı etkinliklerle kendilerini ifade ederler.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-parent-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Ebeveyn olarak ne yapmalıyım?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Terapi sürecine aktif katılım, evde önerilen stratejileri uygulama ve 
                      çocuğunuzla sabırlı iletişim kurma çok önemlidir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Terapi süreci ne kadar sürer?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Çocuğun yaşına ve problemin ciddiyetine bağlı olarak 3-6 ay arası değişir. 
                      İlk birkaç seansta olumlu değişimler gözlenmeye başlar.
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
              Çocuk & Ergen Terapi Hizmetlerim
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Her çocuk ve ergenin benzersiz ihtiyaçlarına yönelik, yaş grubuna uygun terapi yaklaşımları
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

      {/* Age Groups */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Yaş Gruplarına Göre Yaklaşımım
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-200 text-orange-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-bear-smile-line text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Erken Çocukluk (3-6 yaş)
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Oyun terapisi, sanat terapisi ve aile danışmanlığı ile erken dönem problemlerinin çözümü
              </p>
              <button
                onClick={() => handleServiceClick("3-6 yaş arası çocuğum için destek almak istiyorum")}
                className="bg-orange-700 text-white px-6 py-3 rounded-lg hover:bg-orange-800 transition-colors cursor-pointer text-sm font-semibold flex items-center justify-center mx-auto whitespace-nowrap"
              >
                WhatsApp'tan İletişim
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-200 text-red-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-graduation-cap-line text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Okul Çağı (7-12 yaş)
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Bilişsel davranışçı terapi, sosyal beceri eğitimi ve akademik destek programları
              </p>
              <button
                onClick={() => handleServiceClick("7-12 yaş arası çocuğum için yardım almak istiyorum")}
                className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition-colors cursor-pointer text-sm font-semibold flex items-center justify-center mx-auto whitespace-nowrap"
              >
                WhatsApp'tan İletişim
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-rose-200 text-rose-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-star-line text-2xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Ergenlik (13-18 yaş)
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6">
                Kimlik gelişimi, akran ilişkileri, duygusal düzenleme ve gelecek planlaması desteği
              </p>
              <button
                onClick={() => handleServiceClick("13-18 yaş arası ergen çocuğum için destek istiyorum")}
                className="bg-rose-700 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-colors cursor-pointer text-sm font-semibold flex items-center justify-center mx-auto whitespace-nowrap"
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
            Çocuğunuzun gelişimine destek olun
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Çocuk ve ergen psikolojisi konusunda uzman desteği alın. WhatsApp'tan hızla iletişime geçebilirsiniz.
          </p>
          <button 
            onClick={() => handleServiceClick("çocuk ve ergen terapisi için randevu almak istiyorum")}
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
