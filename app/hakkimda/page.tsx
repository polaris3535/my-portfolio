import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function HakkimdaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white p-20">
      <div className="max-w-3xl mx-auto">
        {/* Ana Sayfaya Dönüş Butonu */}
        <Link 
          href="/da" 
          className="flex items-center gap-2 text-blue-500 hover:text-blue-400 mb-10 transition-colors"
        >
          <ArrowLeft size={20} />
          Ana Sayfaya Dön
        </Link>

        <h1 className="text-4xl font-bold mb-6 italic text-blue-500">Hakkımda</h1>
        
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            Merhaba! Ben Veysel. Yazılım dünyasına adım attığımdan beri sürekli öğrenmeye ve 
            yeni teknolojiler keşfetmeye odaklanıyorum.
          </p>
          <p>
            Şu anda Next.js, React ve Tailwind CSS üzerine yoğunlaşmış durumdayım. 
            Amacım, sadece çalışan değil, aynı zamanda kullanıcı deneyimi yüksek ve 
            estetik görünen dijital ürünler geliştirmek.
          </p>
        </div>
      </div>
    </main>
  );
}