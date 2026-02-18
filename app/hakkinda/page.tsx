

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Damrenur Günel",
    "jobTitle": "Klinik Psikolog",
    "description": "Uzman klinik psikolog. Bireysel terapi, çift terapisi ve çocuk psikolojisi alanlarında deneyimli.",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/hakkinda` || "https://example.com/hakkinda",
    "telephone": "+905053542205",
    "email": "info@damrenurgunel.com",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Gedik Üniversitesi",
        "department": "Klinik Psikoloji Yüksek Lisans"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Gedik Üniversitesi",
        "department": "Psikoloji Lisans"
      }
    ],
    "knowsAbout": [
      "Travma Sonrası Stres Bozukluğu",
      "Depresyon Tedavisi",
      "Anksiyete Bozuklukları",
      "Stresle Başa Çıkma Teknikleri",
      "Değişim ve Kabul Terapisi",
      "Yaşam Becerileri Geliştirme"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Klinik Psikoloji Yüksek Lisans",
        "credentialCategory": "degree"
      }
    ],
    "worksFor": {
      "@type": "PsychologicalPractice",
      "name": "Klinik Psikolog Damrenur Günel",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kılıçdede Mahallesi, Çubukçu Sokak No:19/4 Mert Plaza",
        "addressLocality": "İlkadım",
        "addressRegion": "Samsun",
        "addressCountry": "TR"
      }
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
              Hakkımda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ruh sağlığı alanında uzmanlaşmış, empatik ve deneyimli bir psikolog olarak
              danışanlarıma en iyi hizmeti sunmak için buradayım
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://static.readdy.ai/image/06461edf5d9b24c66a3431fe58cc857a/d5380a429bf3784a8a28d8ba1b5c2607.jfif"
                    alt="Klinik Psikolog Damrenur Günel"
                    className="w-full h-[500px] object-cover object-center"
                  />
                </div>
                <div className="mt-8 bg-red-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-gray-900 mb-4">İletişim Bilgileri</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-red-600"></i>
                      <span className="text-gray-700">+90 505 354 22 05</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-red-600"></i>
                      <span className="text-gray-700">info@damrenurgunel.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-whatsapp-line text-green-600"></i>
                      <span className="text-gray-700">WhatsApp Destek</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Klinik Psikolog Damrenur Günel
                </h2>
                <div className="prose prose-lg text-gray-600 leading-relaxed">
                  <p className="mb-6">
                    Merhaba, ben Damrenur Günel. Klinik Psikolog olarak, bireylerin ruh sağlığı
                    yolculuklarında onlara eşlik etmek ve destek olmak için buradayım. Her insanın
                    kendine özgü bir hikayesi olduğuna ve herkesin iyileşme potansiyeline sahip
                    olduğuna yürekten inanıyorum.
                  </p>

                  <p className="mb-6">
                    2021 yılında Gedik Üniversitesi Psikoloji Lisans Programı'ndan mezun olduktan
                    sonra, aynı üniversitenin Klinik Psikoloji Yüksek Lisans Programı'na devam ettim
                    ve 2023 yılında onur derecesiyle mezun oldum. Eğitim sürecim boyunca, psikolojik
                    sağlığın önemini daha derinlemesine anlama fırsatı buldum ve özellikle travma sonrası
                    stres bozukluğu, depresyon, anksiyete bozuklukları gibi çeşitli psikolojik durumlar
                    üzerine yoğunlaştım.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-graduation-cap-line text-red-600 mr-3"></i>
                  Eğitim Geçmişi
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Klinik Psikoloji Yüksek Lisans</h4>
                      <p className="text-gray-600">Gedik Üniversitesi - 2023</p>
                      <p className="text-sm text-gray-500 mt-1">Onur derecesiyle mezun</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-red-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Psikoloji Lisans</h4>
                      <p className="text-gray-600">Gedik Üniversitesi - 2021</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-briefcase-line text-green-600 mr-3"></i>
                  Mesleki Deneyim
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-green-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Klinik Psikolog</h4>
                      <p className="text-gray-600">2023 - Devam Ediyor</p>
                      <p className="text-sm text-gray-500 mt-1">Bireysel psikoterapi ve ruhsal sağlık hizmetleri</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <i className="ri-award-line text-purple-600 mr-3"></i>
                  Uzmanlık Alanları
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Travma Sonrası Stres Bozukluğu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Depresyon Tedavisi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Anksiyete Bozuklukları</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Stresle Başa Çıkma Teknikleri</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Değişim ve Kabul Terapisi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-green-600"></i>
                    <span className="text-gray-700">Yaşam Becerileri Geliştirme</span>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-red-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Tedavi Yaklaşımım
                </h3>
                <div className="prose text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Mezuniyetimin ardından, terapi çalışmalarımda yalnızca danışanlarımın ruhsal
                    iyileşmesine odaklanmakla kalmayıp, aynı zamanda onlara günlük yaşamda
                    karşılaştıkları zorluklarla başa çıkabilme becerileri kazandırmayı hedefliyorum.
                  </p>
                  <p className="mb-4">
                    Terapilerin sonunda, danışanlarımın yalnızca duygusal anlamda daha iyi
                    hissetmelerini değil, aynı zamanda karşılaştıkları problemleri çözme yetilerini
                    de geliştirmelerini sağlamayı amaçlıyorum. Bu yaklaşım sayesinde, danışanlarım
                    seanslardan sonra kendilerine daha güvenli bir şekilde, daha sağlıklı başa çıkma
                    stratejileriyle hayatlarına devam edebiliyorlar.
                  </p>
                  <p className="mb-4">
                    Ayrıca, değişim ve kabul ekseninde farkındalık kazandırarak, stresle başa çıkma
                    yöntemlerini pekiştiriyorum. Amacım, terapinin sonunda her bir danışanın hem
                    duygusal anlamda daha güçlü hem de yaşam becerileri açısından daha donanımlı
                    hale gelmesidir.
                  </p>
                  <p>
                    Klinik psikolog olarak, her bir danışanımın ihtiyaçlarına uygun, kişiye özel
                    bir yaklaşım sergileyerek, daha sağlıklı, huzurlu ve tatmin edici bir yaşam
                    sürmelerine rehberlik etmeye devam ediyorum.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link href="/randevu" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer inline-flex items-center whitespace-nowrap">
                  Randevu Al
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}