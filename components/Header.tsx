
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-lg sm:text-2xl font-['Pacifico'] text-red-700">
                Klinik Psikolog Damrenur Günel
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/hakkinda" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                Hakkında
              </Link>
              <div className="relative">
                <button className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer flex items-center">
                  Hizmetler
                  <i className="ri-arrow-down-s-line ml-1"></i>
                </button>
              </div>
              <Link href="/iletisim" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                İletişim
              </Link>
              <Link href="/randevu" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors cursor-pointer whitespace-nowrap text-sm">
                Randevu Al
              </Link>
            </nav>

            <button className="md:hidden p-2 cursor-pointer">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="text-lg sm:text-2xl font-['Pacifico'] text-red-700">
              Klinik Psikolog Damrenur Günel
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
              Ana Sayfa
            </Link>
            <Link href="/hakkinda" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
              Hakkında
            </Link>
            <div className="relative">
              <button 
                className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer flex items-center"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Hizmetler
                <i className="ri-arrow-down-s-line ml-1"></i>
              </button>
              <div 
                className={`absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 w-56 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link href="/hizmetler/bireysel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 cursor-pointer">
                  Bireysel Terapi
                </Link>
                <Link href="/hizmetler/cocuk-ergen" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 cursor-pointer">
                  Çocuk & Ergen
                </Link>
                <Link href="/hizmetler/aile-cift" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 cursor-pointer">
                  Aile & Çift
                </Link>
                <Link href="/hizmetler/online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 cursor-pointer">
                  Online Terapi
                </Link>
              </div>
            </div>
            <Link href="/iletisim" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
              İletişim
            </Link>
            <Link href="/randevu" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors cursor-pointer whitespace-nowrap text-sm">
              Randevu Al
            </Link>
          </nav>

          <button 
            className="md:hidden p-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                Ana Sayfa
              </Link>
              <Link href="/hakkinda" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                Hakkında
              </Link>
              <Link href="/hizmetler/bireysel" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                Hizmetler
              </Link>
              <Link href="/iletisim" className="text-sm text-gray-700 hover:text-red-700 transition-colors cursor-pointer">
                İletişim
              </Link>
              <Link href="/randevu" className="bg-red-700 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors cursor-pointer text-center whitespace-nowrap text-sm">
                Randevu Al
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
