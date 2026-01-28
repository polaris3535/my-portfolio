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
          <span>DevPortfolio</span>
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
          Ölçeklenebilir web uygulamaları ve kullanıcı odaklı çözümler geliştiren bir geliştiriciyim.
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedGames.map((game, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg hover:shadow-lg transition">
              {/* Resim Alanı */}
              <div className="relative w-full md:w-48 h-48 flex-shrink-0">
                <Image 
                  src={game.image} 
                  alt={game.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              
              {/* Metin Alanı */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold">{game.title}</h3>
                  <div className="flex gap-2 my-2">
                    {game.tech.map(t => <span key={t} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{t}</span>)}
                  </div>
                  <p className="text-gray-700 mb-4">{game.description}</p>
                </div>
                <a href={game.link} target="_blank" className="text-blue-600 hover:underline font-medium">Play Store'da İncele →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Küçük Bilgi */}
      <footer className="border-t border-zinc-900 py-10 text-center text-gray-500 text-sm">
        © 2026 Built with Next.js & Tailwind CSS
      </footer>
    </main>
  );
}