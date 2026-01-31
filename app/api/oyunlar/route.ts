import { NextResponse } from 'next/server';

// Bu veri normalde veritabanından gelir ama şimdilik burada tutuyoruz (Mock Data)
const games = [
  {
    id: 1,
    title: "My Sweet Hotel",
    image: "/hotel.png",
    description: "Unity ile geliştirilmiş, sürükleyici bir otel yönetim simülasyonu.",
    tech: ["Unity", "C#", "Management Sim"],
    androidLink: "https://play.google.com/...",
    iosLink: "https://apps.apple.com/..."
  },
  {
    id: 2,
    title: "3D Ball Runner",
    image: "/runner.png",
    description: "Hız ve refleks tabanlı bir arcade oyunu.",
    tech: ["Unity", "3D Physics", "Arcade"],
    androidLink: "https://play.google.com/...",
    iosLink: ""
  },
  {
    id: 3,
    title: "Powar",
    image: "/powar.png",
    description: "Gerçek zamanlı rekabet odaklı multiplayer deneyim.",
    tech: ["Unity", "C#", "Online Multiplayer"],
    androidLink: "https://play.google.com/...",
    iosLink: ""
  },
  {
    id: 4,
    title: "Match 3D",
    image: "/match.png",
    description: "Geliştirme aşamasında yeni bir Match deneyimi.",
    tech: ["Unity", "C#"],
    androidLink: "",
    iosLink: ""
  }
];

// GET İsteği: Biri bu adrese girerse ne döneceğiz?
export async function GET() {
  // Aşçı yemeği hazırladı, tepsiye koydu (JSON) ve gönderiyor
  return NextResponse.json(games);
}