import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Code2, Gamepad2 } from 'lucide-react';

const publishedGames = [
  {
    title: "My Sweet Hotel",
    image: "/hotel.png",
    description: "Unity ile geliştirilmiş, sürükleyici bir otel yönetim simülasyonu. Kaynak yönetimi ve müşteri memnuniyeti odaklı mekanikler içerir.",
    tech: ["Unity", "C#", "Management Sim"],
    androidLink: "https://play.google.com/store/apps/details?id=com.vepolgames.MySweetHotel",
    iosLink: "https://play.google.com/store/apps/details?id=com.vepolgames.MySweetHotel"
  },
  {
    title: "3D Ball Runner",
    image: "/runner.png",
    description: "Hız ve refleks tabanlı bir arcade oyunu. Dinamik engel sistemi ve akıcı top fiziği üzerine kurulu bir oynanış sunar.",
    tech: ["Unity", "3D Physics", "Arcade"],
    androidLink: "https://play.google.com/store/apps/details?id=com.vepolgames.BALLRUNNER3D",
    iosLink: ""
  },
  {
    title: "Powar",
    image: "/powar.png",
    description: "Gerçek zamanlı rekabet odaklı, online çok oyunculu (multiplayer) bir deneyim. Düşük gecikmeli ağ yapısı üzerine kurgulanmış bir mobil oyun.",
    tech: ["Unity", "C#", "Online Multiplayer"],
    androidLink: "https://play.google.com/store/apps/details?id=com.vepolgames.FightGame",
    iosLink: ""
  },
  {
    title: "Match 3D",
    image: "/match.png",
    description: "Henüz geliştirme aşamasında olan yeni bir Match deneyimi.",
    tech: ["Unity", "C#"],
    androidLink: "", 
    iosLink: ""      
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Gamepad2 className="text-blue-500" />
          <span>Veysel Kınacı</span>
        </div>
        <div className="flex gap-4 md:gap-6 text-gray-400 text-sm font-medium">
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="mailto:veyselkinaci2000@gmail.com" className="hover:text-white transition-colors">İletişim</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center pt-16 pb-24 md:pt-20 md:pb-32 px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs md:text-sm font-medium mb-6 md:mb-8 animate-fade-in">
          Yeni projelere açık • Yazılım Mühendisi
        </div>

        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Modern Teknolojilerle <br /> Geleceği Kodluyorum
        </h1>

        <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10">
          Merhaba, ben <span className="text-white font-medium">Veysel</span>.
          Unity ile sürükleyici oyun deneyimleri, yüksek performanslı mekanikler ve
          multiplayer çözümler geliştiren bir <span className="text-blue-400">Game Developer</span>'ım.
          Fikirleri interaktif dünyalara dönüştürmeyi seviyorum.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/polaris3535" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Github size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/veysel-kınacı-0246b9268/" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Linkedin size={20} className="md:w-6 md:h-6" />
          </a>
          <a href="mailto:veyselkinaci2000@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Mail size={20} className="md:w-6 md:h-6" />
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          Öne Çıkan Projeler
        </h2>

        {/* Mobilde gap-6, Masaüstünde gap-8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {publishedGames.map((game, i) => {
            const isPublished = game.androidLink || game.iosLink;

            return (
              <div key={i} className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">

                {/* Resim Alanı */}
                <div className="relative w-full aspect-video overflow-hidden bg-zinc-950">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-50" />

                  {!isPublished && (
                    <div className="absolute top-3 right-3 bg-yellow-500/20 border border-yellow-500/50 backdrop-blur-md text-yellow-500 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                      Geliştiriliyor
                    </div>
                  )}
                </div>

                {/* İçerik Alanı - Mobilde p-4, Masaüstünde p-6 */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  <div>
                    {/* Başlık mobilde biraz daha küçük */}
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-3">
                      {game.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4 md:mb-5">
                      {game.tech.map(t => (
                        <span key={t} className="bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest font-bold px-2 md:px-2.5 py-1 rounded-md border border-blue-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Mobilde 2 satır, Masaüstünde 3 satır sınırlaması */}
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-5 md:mb-6 line-clamp-2 md:line-clamp-3">
                      {game.description}
                    </p>
                  </div>

                  {/* Butonlar Alanı */}
                  <div className="mt-auto grid gap-2 md:gap-3">

                    {!isPublished ? (
                      <div className="flex items-center justify-center gap-2 w-full bg-zinc-800/50 text-gray-400 py-2.5 md:py-3 rounded-xl border border-zinc-700/50 cursor-not-allowed">
                        <svg className="w-4 h-4 md:w-5 md:h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs md:text-sm font-medium">Yakında Yayınlanacak</span>
                      </div>
                    ) : (
                      <>
                        {game.androidLink && (
                          <a
                            href={game.androidLink}
                            target="_blank"
                            className="flex items-center justify-center gap-3 w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-2.5 md:py-3 rounded-xl border border-zinc-800 hover:border-green-600/50 transition-all duration-300 group/btn"
                          >
                            <svg className="w-5 h-5 md:w-6 md:h-6 fill-current text-green-500 group-hover/btn:text-green-400 flex-shrink-0" viewBox="0 0 512 512">
                              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />                            </svg>
                            <div className="text-left leading-none flex flex-col justify-center">
                              <div className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Download on the</div>
                              <div className="text-sm md:text-base font-bold font-sans">Play Store</div>
                            </div>
                          </a>
                        )}

                        {game.iosLink && (
                          <a
                            href={game.iosLink}
                            target="_blank"
                            className="flex items-center justify-center gap-3 w-full bg-[#1a1a1a] hover:bg-[#252525] text-white py-2.5 md:py-3 rounded-xl border border-zinc-800 hover:border-gray-400/50 transition-all duration-300 group/btn"
                          >
                            <svg className="w-6 h-6 md:w-7 md:h-7 fill-current text-gray-300 group-hover/btn:text-white flex-shrink-0" viewBox="0 0 24 24">
                              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.04,6.56 11.95,6.5C11.83,5.25 12.32,4.18 13,3.5Z" />
                            </svg>
                            <div className="text-left leading-none flex flex-col justify-center">
                              <div className="text-[9px] md:text-[10px] text-gray-400 font-medium uppercase tracking-wider mb-0.5">Download on the</div>
                              <div className="text-sm md:text-base font-bold font-sans">App Store</div>
                            </div>
                          </a>
                        )}
                      </>
                    )}

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} • Veysel Kınacı • Unity Game Developer
      </footer>
    </main>
  );
}