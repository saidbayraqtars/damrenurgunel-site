
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp mesajını oluştur
    let message = `Merhaba, randevu almak istiyorum.\n\n`;
    message += `👤 Ad Soyad: ${formData.fullName}\n`;
    message += `📞 Telefon: ${formData.phone}\n`;
    message += `📧 E-posta: ${formData.email}\n`;

    if (formData.serviceType) {
      const serviceNames: { [key: string]: string } = {
        'bireysel-psikoterapi': 'Bireysel Psikoterapi',
        'cocuk-ergen-terapisi': 'Çocuk ve Ergen Terapisi',
        'cift-evlilik-terapisi': 'Çift ve Evlilik Terapisi',
        'aile-danismanligi': 'Aile Danışmanlığı',
        'online-terapi': 'Online Terapi',
        'kaygi-bozukluklari': 'Kaygı Bozuklukları',
        'depresyon-terapisi': 'Depresyon Terapisi',
        'travma-tssb': 'Travma Sonrası Stres Bozukluğu',
        'panik-atak': 'Panik Atak Terapisi',
        'okb': 'Obsesif Kompulsif Bozukluk',
        'yeme-bozukluklari': 'Yeme Bozuklukları',
        'bagimlilik-terapisi': 'Bağımlılık Terapisi',
        'ofke-kontrolu': 'Öfke Kontrolü',
        'fobiler': 'Fobiler ve Sosyal Kaygı',
        'yas-danismanligi': 'Yas Danışmanlığı',
        'stres-yonetimi': 'Stres Yönetimi',
        'kisilik-bozukluklari': 'Kişilik Bozuklukları',
        'uyku-problemleri': 'Uyku Problemleri',
        'dehb': 'Dikkat Eksikliği ve Hiperaktivite',
        'kisisel-gelisim': 'Kişisel Gelişim'
      };
      message += `🎯 Hizmet: ${serviceNames[formData.serviceType]}\n`;
    }

    if (formData.preferredDate) {
      message += `📅 Tercih Edilen Tarih: ${formData.preferredDate}\n`;
    }

    if (formData.preferredTime) {
      message += `🕐 Tercih Edilen Saat: ${formData.preferredTime}\n`;
    }

    if (formData.notes) {
      message += `📝 Notlar: ${formData.notes}\n`;
    }

    // WhatsApp URL'sini oluştur ve yönlendir
    const whatsappUrl = `https://wa.me/905053542205?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'notes' && value.length > 500) {
      return;
    }
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Randevu Al
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ruh sağlığınız için ilk adımı atın. WhatsApp üzerinden hızla iletişime geçin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-phone-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Telefon</h3>
              <p className="text-gray-600 mb-4">Doğrudan arayarak randevu alabilirsiniz</p>
              <a href="tel:+905053542205" className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer">
                +90 505 354 22 05
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-whatsapp-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">WhatsApp üzerinden mesaj gönderin</p>
              <a href="https://wa.me/905053542205" className="text-green-600 font-semibold hover:text-green-700 cursor-pointer">
                Mesaj Gönder
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-mail-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">E-posta</h3>
              <p className="text-gray-600 mb-4">E-posta ile iletişime geçin</p>
              <a href="mailto:info@damrenurgunel.com" className="text-purple-600 font-semibold hover:text-purple-700 cursor-pointer">
                E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WhatsApp Randevu Formu
              </h2>
              <p className="text-lg text-gray-600">
                Formu doldurun, WhatsApp'tan otomatik mesaj ile randevu talebinizi gönderin.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-900 mb-2">
                    Hizmet Türü *
                  </label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-sm pr-8"
                      required
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="bireysel-psikoterapi">Bireysel Psikoterapi</option>
                      <option value="cocuk-ergen-terapisi">Çocuk ve Ergen Terapisi</option>
                      <option value="cift-evlilik-terapisi">Çift ve Evlilik Terapisi</option>
                      <option value="aile-danismanligi">Aile Danışmanlığı</option>
                      <option value="online-terapi">Online Terapi</option>
                      <option value="kaygi-bozukluklari">Kaygı Bozuklukları</option>
                      <option value="depresyon-terapisi">Depresyon Terapisi</option>
                      <option value="travma-tssb">Travma Sonrası Stres Bozukluğu</option>
                      <option value="panik-atak">Panik Atak Terapisi</option>
                      <option value="okb">Obsesif Kompulsif Bozukluk</option>
                      <option value="yeme-bozukluklari">Yeme Bozuklukları</option>
                      <option value="bagimlilik-terapisi">Bağımlılık Terapisi</option>
                      <option value="ofke-kontrolu">Öfke Kontrolü</option>
                      <option value="fobiler">Fobiler ve Sosyal Kaygı</option>
                      <option value="yas-danismanligi">Yas Danışmanlığı</option>
                      <option value="stres-yonetimi">Stres Yönetimi</option>
                      <option value="kisilik-bozukluklari">Kişilik Bozuklukları</option>
                      <option value="uyku-problemleri">Uyku Problemleri</option>
                      <option value="dehb">Dikkat Eksikliği ve Hiperaktivite</option>
                      <option value="kisisel-gelisim">Kişisel Gelişim</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tercih Edilen Tarih
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-900 mb-2">
                    Tercih Edilen Saat
                  </label>
                  <div className="relative">
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer text-sm pr-8"
                    >
                      <option value="">Saat seçiniz</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                    </select>
                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-900 mb-2">
                    Notlar (İsteğe bağlı)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    placeholder="Eklemek istediğiniz özel notlar..."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    {formData.notes.length}/500 karakter
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  WhatsApp'tan Randevu Talep Et
                  <i className="ri-whatsapp-line ml-2 text-xl"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ofis Konumu
            </h2>
            <p className="text-lg text-gray-600">
              Merkezi konumdaki ofisimde sizi ağırlamaktan mutluluk duyarım
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <i className="ri-map-pin-line text-blue-600 text-xl mt-1"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adres</h4>
                      <p className="text-gray-600">
                        Kılıçdede Mahallesi, Çubukçu Sokak No:19/4<br />
                        Mert Plaza, İlkadım, Samsun
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <i className="ri-phone-line text-blue-600 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefon</h4>
                      <p className="text-gray-600">+90 505 354 22 05</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <i className="ri-mail-line text-blue-600 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">E-posta</h4>
                      <p className="text-gray-600">info@damrenurgunel.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <i className="ri-time-line text-blue-600 text-xl"></i>
                    <div>
                      <h4 className="font-semibold text-gray-900">Çalışma Saatleri</h4>
                      <p className="text-gray-600">
                        Pazartesi - Cuma: 09:00 - 18:00<br />
                        Cumartesi: 09:00 - 15:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.234567890123!2d36.3300000!3d41.2867000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408877c4b2e3c6d7%3A0x4d3f8a9b5c6e7f8a!2zS8SxbMSxw6dkZWRlLCDDh3VidWtjdSBTay4sIDU1MjAwIMSwbGthZMSxbS9TYW1zdW4sIFTDvHJraXll!5e0!3m2!1str!2str!4v1704067200000!5m2!1str!2str"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ofis Konumu"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}