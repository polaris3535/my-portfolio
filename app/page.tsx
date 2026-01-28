import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const publishedGames = [
  {
    title: "My Sweet Hotel",
    image: "/hotel.png",
    description: "Unity ile geliştirilmiş, sürükleyici bir otel yönetim simülasyonu. Kaynak yönetimi ve müşteri memnuniyeti odaklı mekanikler içerir.",
    tech: ["Unity", "C#", "Management Sim"],
    link: "https://play.google.com/store/apps/details?id=com.vepolgames.MySweetHotel"
  },
  {
    title: "3D Ball Runner",
    image: "/runner.png",
    description: "Hız ve refleks tabanlı bir arcade oyunu. Dinamik engel sistemi ve akıcı top fiziği üzerine kurulu bir oynanış sunar.",
    tech: ["Unity", "3D Physics", "Arcade"],
    link: "https://play.google.com/store/apps/details?id=com.vepolgames.BALLRUNNER3D"
  },
  {
    title: "Powar",
    image: "/powar.png",
    description: "Gerçek zamanlı rekabet odaklı, online çok oyunculu (multiplayer) bir deneyim. Oyuncuların birbirleriyle etkileşime girdiği, düşük gecikmeli (low-latency) ağ yapısı üzerine kurgulanmış bir mobil oyun.",
    tech: ["Unity", "C#", "Online Multiplayer", "Real-time Networking"],
    link: "https://play.google.com/store/apps/details?id=com.vepolgames.FightGame"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      {/* Navigasyon */}
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Code2 className="text-blue-500" />
          <span>Veysel Kınacı</span>
        </div>
        <div className="flex gap-6 text-gray-400 text-sm font-medium">
          <a href="#projects" className="hover:text-white transition-colors">Projeler</a>
          <a href="mailto:veyselkinaci2000@gmail.com" className="hover:text-white transition-colors">İletişim</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-32 px-6 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 animate-fade-in">
          Yeni projelere açık • Yazılım Mühendisi
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
          Modern Teknolojilerle <br /> Geleceği Kodluyorum
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
  Merhaba, ben <span className="text-white font-medium">Veysel</span>. 
  Unity ile sürükleyici oyun deneyimleri, yüksek performanslı mekanikler ve 
  multiplayer çözümler geliştiren bir <span className="text-blue-400">Game Developer</span>'ım. 
  Fikirleri interaktif dünyalara dönüştürmeyi seviyorum.
</p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://github.com/polaris3535" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/veysel-kınacı-0246b9268/" target="_blank" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Linkedin size={24} />
          </a>
          <a href="mailto:veyselkinaci2000@gmail.com" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-all">
            <Mail size={24} />
          </a>
        </div>
      </section>

      {/* Projeler Bölümü */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-blue-500"></span>
          Öne Çıkan Projeler
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {publishedGames.map((game, i) => (
    <div key={i} className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]">
      
      {/* Resim Alanı */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image 
          src={game.image} 
          alt={game.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Resim üzerine hafif bir karanlık katman (Metinlerin daha iyi okunması için isteğe bağlı) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
      </div>
      
      {/* Metin Alanı */}
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {game.title}
            </h3>
            <ExternalLink size={18} className="text-zinc-500 group-hover:text-blue-400" />
          </div>
          
          {/* Tech Etiketleri - Daha modern bir görünüm */}
          <div className="flex flex-wrap gap-2 mb-5">
            {game.tech.map(t => (
              <span key={t} className="bg-blue-500/10 text-blue-400 text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-md border border-blue-500/20">
                {t}
              </span>
            ))}
          </div>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {game.description}
          </p>
        </div>

        {/* Buton - Modern Glassmorphism Efekti */}
        <div className="mt-auto">
          <a 
            href={game.link} 
            target="_blank" 
            className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-900/20 gap-2"
          >
            Play Store'da İncele
          </a>
        </div>
      </div>
    </div>
  ))} 
</div>
      </section>

      {/* Footer / Küçük Bilgi */}
      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} • Veysel Kınacı • Unity Game Developer
</footer>
    </main>
  );
}