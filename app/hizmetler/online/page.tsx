
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function OnlineTherapy() {
  const services = [
    {
      title: "Bireysel Online Terapi",
      description: "Kişisel sorunlarınız için güvenli video görüşme ortamında terapi seansları",
      icon: "ri-vidicon-line",
      color: "blue",
      whatsappText: "bireysel online terapi hakkında bilgi almak istiyorum"
    },
    {
      title: "Çift Online Danışmanlığı",
      description: "Çiftlerin evlerinden rahatlıkla katılabilecekleri online danışmanlık seansları",
      icon: "ri-hearts-line",
      color: "pink",
      whatsappText: "çift online danışmanlığı için yardım almak istiyorum"
    },
    {
      title: "Online Aile Terapisi",
      description: "Tüm aile üyelerinin katılabileceği online aile terapi seansları",
      icon: "ri-team-line",
      color: "green",
      whatsappText: "online aile terapisi konusunda destek istiyorum"
    },
    {
      title: "Acil Destek Seansları",
      description: "Ani kriz durumlarında hızlı online destek ve müdahale",
      icon: "ri-alarm-warning-line",
      color: "red",
      whatsappText: "acil online destek almak istiyorum"
    },
    {
      title: "Yas ve Kayıp Danışmanlığı",
      description: "Kayıp yaşantıları için online yas danışmanlığı ve duygusal destek",
      icon: "ri-heart-line",
      color: "purple",
      whatsappText: "yas danışmanlığı için online destek istiyorum"
    },
    {
      title: "Kaygı ve Panik Online Terapi",
      description: "Anksiyete ve panik atak problemleri için uzaktan terapi desteği",
      icon: "ri-heart-pulse-line",
      color: "orange",
      whatsappText: "kaygı problemleri için online terapi almak istiyorum"
    },
    {
      title: "Depresyon Online Terapisi",
      description: "Depresif belirtiler için online psikolojik destek ve tedavi",
      icon: "ri-emotion-sad-line",
      color: "indigo",
      whatsappText: "depresyon için online terapi desteği almak istiyorum"
    },
    {
      title: "Online Travma Terapisi",
      description: "EMDR ve diğer travma tedavi yöntemleri ile online destek",
      icon: "ri-shield-cross-line",
      color: "teal",
      whatsappText: "travma için online terapi almak istiyorum"
    },
    {
      title: "Öfke Kontrolü Online",
      description: "Öfke yönetimi teknikleri için online bireysel seanslar",
      icon: "ri-fire-line",
      color: "red",
      whatsappText: "öfke kontrolü için online destek istiyorum"
    },
    {
      title: "Online Kişisel Gelişim",
      description: "Potansiyelinizi keşfetmek için online kişisel gelişim seansları",
      icon: "ri-rocket-line",
      color: "yellow",
      whatsappText: "kişisel gelişim için online destek almak istiyorum"
    },
    {
      title: "Uzun Mesafe İlişki Danışmanlığı",
      description: "Farklı şehirlerde yaşayan çiftler için online danışmanlık",
      icon: "ri-global-line",
      color: "blue",
      whatsappText: "uzun mesafe ilişki danışmanlığı almak istiyorum"
    },
    {
      title: "Online Grup Terapisi",
      description: "Benzer sorunları yaşayan kişilerle online grup terapi seansları",
      icon: "ri-group-line",
      color: "green",
      whatsappText: "online grup terapisi hakkında bilgi almak istiyorum"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      pink: "bg-pink-100 text-pink-600",
      green: "bg-green-100 text-green-600",
      red: "bg-red-100 text-red-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      teal: "bg-teal-100 text-teal-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleWhatsAppRedirect = (text: string) => {
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
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=modern%20home%20office%20setup%20with%20laptop%20showing%20video%20call%20therapy%20session%2C%20comfortable%20lighting%2C%20professional%20online%20consultation%20environment%2C%20technology%20meets%20mental%20health%20care%2C%20clean%20minimalist%20background&width=1920&height=600&seq=online-hero&orientation=landscape)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-900/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Online Psikoterapi
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Evinizin konforunda, güvenli ve profesyonel online terapi hizmetleri. 
              Zaman ve mekân sınırı olmadan psikolojik desteğe ulaşın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => handleWhatsAppRedirect("online terapi hakkında bilgi almak istiyorum")}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer text-center whitespace-nowrap flex items-center justify-center"
              >
                WhatsApp'tan Destek Al
                <i className="ri-whatsapp-line ml-2"></i>
              </button>
              <Link href="/randevu" className="bg-teal-600/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-600/30 transition-colors cursor-pointer text-center whitespace-nowrap">
                Randevu Formu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Online Terapi Hizmetlerim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknoloji ile desteklenen profesyonel psikolojik destek hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100">
                <div className={`w-12 h-12 ${getColorClasses(service.color)} rounded-xl flex items-center justify-center mb-6`}>
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button
                  onClick={() => handleWhatsAppRedirect(service.whatsappText)}
                  className="w-full bg-green-600 text-white px-4 py-3 rounded-lg hover:bg-green-700 transition-colors cursor-pointer text-sm font-semibold flex items-center justify-center whitespace-nowrap"
                >
                  Destek Al
                  <i className="ri-whatsapp-line ml-2"></i>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Online Terapinin Avantajları
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-home-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Evden Konfor
              </h3>
              <p className="text-gray-600 text-sm">
                Kendi ortamınızda rahat ve güvenli terapi
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Zaman Tasarrufu
              </h3>
              <p className="text-gray-600 text-sm">
                Ulaşım gerektirmeyen pratik çözüm
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gizlilik
              </h3>
              <p className="text-gray-600 text-sm">
                Kimseyi tanımama endişesi olmadan terapi
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-line text-2xl"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Esnek Saatler
              </h3>
              <p className="text-gray-600 text-sm">
                Size uygun saatlerde randevu imkânı
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Online Terapi Nasıl Çalışır?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                İletişim
              </h3>
              <p className="text-gray-600">
                WhatsApp'tan iletişime geçin veya randevu formu doldurun
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Randevu
              </h3>
              <p className="text-gray-600">
                Size uygun tarih ve saatte online randevu planlıyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Bağlantı
              </h3>
              <p className="text-gray-600">
                Güvenli video görüşme linki ile seansınıza katılın
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Terapi
              </h3>
              <p className="text-gray-600">
                Profesyonel terapi seansınızı evinizin konforunda alın
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Online terapiye bugün başlayın
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Evinizin konforunda profesyonel psikolojik destek alın. WhatsApp'tan hemen iletişime geçin.
          </p>
          <button 
            onClick={() => handleWhatsAppRedirect("online terapi için randevu almak istiyorum")}
            className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-50 transition-colors cursor-pointer inline-flex items-center whitespace-nowrap"
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
