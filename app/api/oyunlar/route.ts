import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

// Bu satır, sayfanın her seferinde veritabanına gitmesini sağlar (Cache'i kapatır)
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // 1. Veritabanına "Sorgu" atıyoruz: "games tablosundaki her şeyi getir"
    const result = await sql`SELECT * FROM games ORDER BY id ASC`;
    
    // 2. Veritabanından gelen veriyi Frontend'in anlayacağı dile çeviriyoruz
    // Veritabanında tech: "Unity, C#" (string) olarak duruyor, 
    // biz onu ["Unity", "C#"] (array) yapıyoruz.
    const formattedGames = result.rows.map(game => ({
      ...game,
      tech: game.tech ? game.tech.split(',').map((t: string) => t.trim()) : [],
      // Veritabanındaki alt_çizgili isimleri (snake_case) 
      // JavaScript'in sevdiği camelCase haline getiriyoruz
      androidLink: game.android_link,
      iosLink: game.ios_link
    }));

    // 3. Hazırladığımız listeyi JSON olarak dünyaya sunuyoruz
    return NextResponse.json(formattedGames);
  } catch (error) {
    console.error("Veritabanı bağlantı hatası:", error);
    return NextResponse.json({ error: "Veritabanına bağlanılamadı" }, { status: 500 });
  }
}