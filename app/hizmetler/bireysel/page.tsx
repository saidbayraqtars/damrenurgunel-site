
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function IndividualTherapy() {
  const services = [
    {
      title: "Kaygı (Anksiyete) Bozuklukları",
      description: "Yaygın kaygı bozukluğu, sosyal kaygı, panik bozukluk ve fobiler için etkili tedavi yaklaşımları",
      icon: "ri-heart-pulse-line",
      color: "red"
    },
    {
      title: "Depresyon Terapisi",
      description: "Major depresyon, distimi ve mevsimsel depresyon için kapsamlı terapi desteği",
      icon: "ri-sun-line",
      color: "orange"
    },
    {
      title: "Travma Sonrası Stres Bozukluğu (TSSB)",
      description: "EMDR ve BDT teknikleri ile travma iyileşme süreci",
      icon: "ri-shield-check-line",
      color: "maroon"
    },
    {
      title: "Panik Atak Terapisi",
      description: "Panik atakların yönetimi ve önlenmesi için özel teknikler",
      icon: "ri-lungs-line",
      color: "red"
    },
    {
      title: "Obsesif Kompulsif Bozukluk (OKB)",
      description: "Obsesyonlar ve kompulsiyonlarla başa çıkma stratejileri",
      icon: "ri-loop-right-line",
      color: "crimson"
    },
    {
      title: "Öfke Kontrolü",
      description: "Öfke yönetimi ve sağlıklı iletişim becerilerinin geliştirilmesi",
      icon: "ri-fire-line",
      color: "orange"
    },
    {
      title: "Stres Yönetimi",
      description: "Günlük yaşam stresi, iş stresi ve akademik stresle başa çıkma",
      icon: "ri-leaf-line",
      color: "maroon"
    },
    {
      title: "Kişisel Gelişim & Kendini Keşfetme",
      description: "Potansiyelinizi keşfetme ve yaşam hedeflerinizi belirleme",
      icon: "ri-rocket-line",
      color: "burgundy"
    },
    {
      title: "Yas Danışmanlığı",
      description: "Kayıp yaşantıları ve yas süreciyle başa çıkma desteği",
      icon: "ri-heart-line",
      color: "crimson"
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

  const handleServiceClick = () => {
    const message = `Merhaba, bireysel psikoterapi hakkında bilgi almak istiyorum. Randevu almak istiyorum.`;
    const whatsappUrl = `https://wa.me/905053542205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Bireysel Psikoterapi",
    "description": "Kişisel zorluklar ve ruhsal problemlerle başa çıkma için uzman psikolojik destek",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/hizmetler/bireysel` || "https://example.com/hizmetler/bireysel",
    "procedureType": "Psychotherapy",
    "followup": "Düzenli terapi seansları",
    "howPerformed": "Yüz yüze veya online bireysel görüşmeler",
    "preparation": "Özel hazırlık gerektirmez",
    "medicineSystem": "Clinical Psychology",
    "bodyLocation": "Mental Health",
    "availableService": services.map(service => ({
      "@type": "MedicalTherapy",
      "name": service.title,
      "description": service.description
    })),
    "provider": {
      "@type": "Person",
      "name": "Damrenur Günel",
      "jobTitle": "Klinik Psikolog",
      "hasCredential": [
        "Klinik Psikoloji Yüksek Lisans",
        "Bilişsel Davranışçı Terapi Sertifikası",
        "EMDR Travma Terapisi Sertifikası"
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
      <section 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=peaceful%20individual%20therapy%20consultation%20room%20with%20comfortable%20seating%2C%20natural%20lighting%2C%20calming%20pastel%20colors%2C%20plants%2C%20minimalist%20modern%20design%2C%20therapeutic%20environment%20for%20one-on-one%20counseling%20sessions&width=1920&height=600&seq=individual-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-900/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Bireysel Psikoterapi
            </h1>
            <p className="text-lg sm:text-xl text-red-100 mb-8 leading-relaxed">
              Kişisel zorluklarınızı aşmanız ve ruh sağlığınızı güçlendirmeniz için 
              bireysel ihtiyaçlarınıza özel terapi desteği sunuyorum
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/randevu" className="bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-red-50 transition-colors cursor-pointer text-center whitespace-nowrap">
                Randevu Al
              </Link>
              <Link href="/iletisim" className="bg-red-600/20 backdrop-blur-sm text-white border-2 border-white/30 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-red-600/30 transition-colors cursor-pointer text-center whitespace-nowrap">
                Bilgi Al
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
                Bireysel psikoterapi hakkında sık sorulan sorular
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Bireysel terapi ne kadar sürer?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Terapi süresi, yaşadığınız zorlukların karmaşıklığına ve kişisel hedeflerinize bağlı olarak değişir. 
                      Kısa süreli terapi 8-12 seans, uzun süreli terapi ise 6 ay ile 2 yıl arasında sürebilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-tools-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Hangi terapi yaklaşımlarını kullanıyorsunuz?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Bilişsel Davranışçı Terapi (BDT), EMDR, Diyalektik Davranış Terapisi ve Mindfulness 
                      tabanlı yaklaşımları danışanımın ihtiyaçlarına göre entegre ederim.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-calendar-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Seanslar ne sıklıkta yapılır?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Genellikle haftada bir kez 50 dakikalık seanslar şeklinde başlarız. 
                      İlerleme durumuna göre sıklık azaltılabilir veya artırılabilir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-rose-600 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-shield-check-line text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Gizlilik nasıl korunur?
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Terapi sürecindeki tüm bilgiler tamamen gizlidir. Yasal zorunluluklar dışında, 
                      izniniz olmadan hiçbir bilgi üçüncü kişilerle paylaşılmaz.
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
              Bireysel Terapi Hizmetlerim
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Her bireyin benzersiz ihtiyaçlarına yönelik, kanıta dayalı terapi yaklaşımları ile 
              size özel çözümler sunuyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 cursor-pointer group"
                onClick={handleServiceClick}
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

      {/* Process Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Terapi Sürecim
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Her danışanımla kişiselleştirilmiş bir yaklaşım benimser, 
              tedavi sürecini beraber şekillendiririz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                İlk Görüşme
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Mevcut durumunuzu değerlendirip hedeflerinizi belirliyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Tedavi Planı
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Size özel tedavi yaklaşımını ve sürecini birlikte planlıyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Aktif Terapi
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Düzenli seanslarla hedeflerinize doğru ilerliyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-rose-800 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                Değerlendirme
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                İlerlemenizi takip eder ve gerektiğinde planı güncelleriz
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-red-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            İyileşme yolculuğunuza bugün başlayın
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Bireysel terapi ile kendinizi daha iyi tanıyın, zorluklarla başa çıkma becerilerinizi geliştirin 
            ve daha sağlıklı bir yaşam için ilk adımı atın.
          </p>
          <Link href="/randevu" className="bg-white text-red-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-red-50 transition-colors cursor-pointer inline-flex items-center whitespace-nowrap">
            Ücretsiz Ön Görüşme
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
