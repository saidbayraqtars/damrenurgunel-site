export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-8xl font-bold text-red-100">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-6 text-gray-900">
        Aradığınız Sayfa Bulunamadı
      </h2>
      <p className="mt-4 text-lg text-gray-500 max-w-md">
        Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
      </p>
      <a
        href="/"
        className="mt-8 bg-red-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-800 transition-colors"
      >
        Ana Sayfaya Dön
      </a>
    </div>
  );
}