import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://pastorsheartcounseling.com'

  const routes = [
    '',
    '/about',
    '/services',
    '/services/individual-counseling',
    '/services/couples-counseling',
    '/services/teen-counseling',
    '/services/family-therapy',
    '/services/grief-and-loss',
    '/services/addiction-recovery',
    '/contact',
    '/join-team',
    '/sitemap',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `
            <url>
              <loc>${baseUrl}${route}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.8</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=1200, stale-while-revalidate=600',
    },
  })
}
