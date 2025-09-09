
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Kaygı ile Başa Çıkma Yöntemleri",
      excerpt: "Günlük hayatta karşılaştığımız kaygı durumları ile etkili başa çıkma stratejileri ve pratik teknikler.",
      date: "15 Ocak 2025",
      readTime: "5 dk",
      category: "Kaygı Yönetimi",
      image: "https://readdy.ai/api/search-image?query=A%20peaceful%20meditation%20scene%20with%20a%20person%20sitting%20calmly%20in%20a%20serene%20natural%20environment%2C%20soft%20lighting%2C%20minimal%20background%2C%20warm%20and%20calming%20atmosphere%2C%20representing%20anxiety%20management%20and%20mental%20wellness%2C%20professional%20photography%20style&width=400&height=250&seq=blog1&orientation=landscape"
    },
    {
      id: 2,
      title: "Çocuklarda Duygusal Zeka Geliştirme",
      excerpt: "Çocukların duygusal zeka becerilerini desteklemek için ebeveynlerin uygulayabileceği pratik yöntemler.",
      date: "12 Ocak 2025",
      readTime: "7 dk",
      category: "Çocuk Gelişimi",
      image: "https://readdy.ai/api/search-image?query=Happy%20children%20playing%20and%20learning%20together%20in%20a%20bright%20colorful%20educational%20environment%2C%20emotional%20development%20activities%2C%20warm%20lighting%2C%20joyful%20atmosphere%2C%20professional%20child%20psychology%20illustration%20style&width=400&height=250&seq=blog2&orientation=landscape"
    },
    {
      id: 3,
      title: "Stres Yönetimi ve Mindfulness",
      excerpt: "Modern yaşamın stresli durumlarında farkındalık temelli yaklaşımlar ile iç huzuru bulma yolları.",
      date: "10 Ocak 2025",
      readTime: "6 dk",
      category: "Stres Yönetimi",
      image: "https://readdy.ai/api/search-image?query=A%20tranquil%20mindfulness%20meditation%20setting%20with%20soft%20natural%20lighting%2C%20zen-like%20environment%2C%20peaceful%20atmosphere%2C%20representing%20stress%20management%20and%20mental%20clarity%2C%20minimalist%20and%20calming%20design&width=400&height=250&seq=blog3&orientation=landscape"
    },
    {
      id: 4,
      title: "İlişkilerde Sağlıklı İletişim",
      excerpt: "Çift ve aile ilişkilerinde etkili iletişim kurarak bağları güçlendirmenin temel prensipleri.",
      date: "8 Ocak 2025",
      readTime: "8 dk",
      category: "İlişkiler",
      image: "https://readdy.ai/api/search-image?query=A%20couple%20having%20a%20meaningful%20conversation%20in%20a%20comfortable%20setting%2C%20warm%20lighting%2C%20positive%20body%20language%2C%20representing%20healthy%20communication%20and%20relationship%20counseling%2C%20professional%20photography%20style&width=400&height=250&seq=blog4&orientation=landscape"
    },
    {
      id: 5,
      title: "Depresyon Belirtilerini Tanımak",
      excerpt: "Depresyonun erken belirtilerini fark etmek ve profesyonel yardım almanın önemi üzerine.",
      date: "5 Ocak 2025",
      readTime: "9 dk",
      category: "Ruh Sağlığı",
      image: "https://readdy.ai/api/search-image?query=A%20supportive%20therapy%20session%20environment%20with%20soft%20lighting%2C%20comfortable%20seating%2C%20representing%20mental%20health%20awareness%20and%20depression%20treatment%2C%20professional%20and%20hopeful%20atmosphere&width=400&height=250&seq=blog5&orientation=landscape"
    },
    {
      id: 6,
      title: "Öfke Kontrolü Teknikleri",
      excerpt: "Öfke anlarında duygularımızı kontrol etmek ve sağlıklı tepkiler geliştirmek için etkili stratejiler.",
      date: "3 Ocak 2025",
      readTime: "5 dk",
      category: "Duygu Yönetimi",
      image: "https://readdy.ai/api/search-image?query=A%20calm%20person%20practicing%20breathing%20exercises%20in%20a%20peaceful%20environment%2C%20self-control%20and%20emotional%20regulation%2C%20soft%20colors%2C%20serene%20atmosphere%2C%20representing%20anger%20management%20techniques&width=400&height=250&seq=blog6&orientation=landscape"
    },
    {
      id: 7,
      title: "Travma Sonrası İyileşme Süreci",
      excerpt: "Travmatik yaşantılar sonrası iyileşme sürecinde atılacak adımlar ve destek mekanizmaları.",
      date: "1 Ocak 2025",
      readTime: "10 dk",
      category: "Travma Terapisi",
      image: "https://readdy.ai/api/search-image?query=A%20healing%20garden%20with%20sunlight%20breaking%20through%20clouds%2C%20representing%20recovery%20and%20hope%20after%20trauma%2C%20peaceful%20natural%20environment%2C%20soft%20warm%20lighting%2C%20symbolizing%20resilience%20and%20healing%20journey&width=400&height=250&seq=blog7&orientation=landscape"
    },
    {
      id: 8,
      title: "Uyku Bozuklukları ve Çözümleri",
      excerpt: "Kaliteli uyku için uyku hijyeni kuralları ve uyku bozukluklarına yönelik pratik öneriler.",
      date: "28 Aralık 2024",
      readTime: "6 dk",
      category: "Uyku Sağlığı",
      image: "https://readdy.ai/api/search-image?query=A%20peaceful%20bedroom%20environment%20with%20soft%20bedding%2C%20dim%20lighting%2C%20representing%20quality%20sleep%20and%20rest%2C%20calm%20atmosphere%2C%20professional%20interior%20design%20for%20mental%20wellness%20and%20sleep%20hygiene&width=400&height=250&seq=blog8&orientation=landscape"
    }
  ];

  const categories = ["Tümü", "Kaygı Yönetimi", "Çocuk Gelişimi", "Stres Yönetimi", "İlişkiler", "Ruh Sağlığı", "Duygu Yönetimi", "Travma Terapisi", "Uyku Sağlığı"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Klinik Psikolog Damrenur Günel Blog",
    "description": "Ruh sağlığı, psikoloji ve kişisel gelişim konularında uzman makaleleri",
    "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog` || "https://example.com/blog",
    "author": {
      "@type": "Person",
      "name": "Damrenur Günel",
      "jobTitle": "Klinik Psikolog"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Klinik Psikolog Damrenur Günel",
      "logo": {
        "@type": "ImageObject",
        "url": `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` || "https://example.com/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": "2025-01-15T10:00:00.000Z",
      "author": {
        "@type": "Person",
        "name": "Damrenur Günel"
      },
      "articleSection": post.category,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}` || `https://example.com/blog/${post.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Blog & Makaleler
            </h1>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ruh sağlığı, kişisel gelişim ve psikoloji alanındaki güncel bilgi ve deneyimlerimi sizlerle paylaşıyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 sm:px-6 py-2 rounded-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer whitespace-nowrap text-xs sm:text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <i className="ri-time-line mr-1"></i>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 cursor-pointer text-sm">
                    Devamını Oku
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              Ruh sağlığı ve kişisel gelişim konularındaki en güncel yazılarımı e-posta ile alın.
            </p>
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm">
                  Abone Ol
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                E-posta adresiniz gizli tutulur. İstediğiniz zaman abonelikten çıkabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
