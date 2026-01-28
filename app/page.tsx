import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "E-Ticaret Arayüzü",
    description: "Next.js ve Tailwind CSS kullanarak hazırladığım modern bir alışveriş sitesi tasarımı.",
    tags: ["Next.js", "React", "Tailwind"],
    link: "#"
  },
  {
    title: "Hava Durumu Uygulaması",
    description: "API kullanarak anlık hava durumu verilerini çeken interaktif bir uygulama.",
    tags: ["JavaScript", "API", "CSS"],
    link: "#"
  },
  {
    title: "Kişisel Blog",
    description: "Markdown destekli, hızlı ve SEO uyumlu bir blog taslağı.",
    tags: ["TypeScript", "Next.js"],
    link: "#"
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
          <a href="mailto:email@adresiniz.com" className="hover:text-white transition-colors">İletişim</a>
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
          {projects.map((project, index) => (
            <div key={index} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-blue-500/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <Code2 size={20} />
                </div>
                <a href={project.link} className="text-gray-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-zinc-800 text-gray-300 rounded">
                    {tag}
                  </span>
                ))}
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