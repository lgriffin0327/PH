import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-soft-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Pastor's Heart Counseling</h3>
            <p>Providing Christ-centered counseling for individuals, couples, and families.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-warm-beige transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-warm-beige transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="hover:text-warm-beige transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-warm-beige transition-colors duration-300">Contact</Link></li>
              <li><Link href="/sitemap" className="hover:text-warm-beige transition-colors duration-300">Sitemap</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/individual-counseling" className="hover:text-warm-beige transition-colors duration-300">Individual Counseling</Link></li>
              <li><Link href="/services/couples-counseling" className="hover:text-warm-beige transition-colors duration-300">Couples Therapy</Link></li>
              <li><Link href="/services/family-therapy" className="hover:text-warm-beige transition-colors duration-300">Family Counseling</Link></li>
              <li><Link href="/services/teen-counseling" className="hover:text-warm-beige transition-colors duration-300">Teen Counseling</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: info@pastorsheartcounseling.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-soft-white text-center">
          <p>&copy; 2023 Pastor's Heart Counseling. All rights reserved.</p>
          <Link href="/sitemap.xml" className="inline-block mt-2 hover:text-warm-beige transition-colors duration-300">
            XML Sitemap
          </Link>
        </div>
      </div>
    </footer>
  )
}
