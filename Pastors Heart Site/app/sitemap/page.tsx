import Link from 'next/link'

export const metadata = {
  title: "Sitemap - Pastor's Heart Counseling",
  description: "Navigate our site easily with our comprehensive sitemap.",
}

export default function Sitemap() {
  const siteStructure = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { 
      title: "Services", 
      path: "/services",
      subpages: [
        { title: "Individual Counseling", path: "/services/individual-counseling" },
        { title: "Couples Counseling", path: "/services/couples-counseling" },
        { title: "Teen Counseling", path: "/services/teen-counseling" },
        { title: "Family Therapy", path: "/services/family-therapy" },
        { title: "Grief and Loss Counseling", path: "/services/grief-and-loss" },
        { title: "Addiction Recovery", path: "/services/addiction-recovery" },
      ]
    },
    { title: "Contact", path: "/contact" },
    { title: "Join Our Team", path: "/join-team" },
  ]

  return (
    <div className="bg-soft-white min-h-screen py-12">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-deep-blue mb-8 text-center">Sitemap</h1>
        <p className="text-center mb-12 text-lg text-gray-600">Explore our website structure and find the information you need.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <Link href={item.path} className="text-2xl font-semibold text-deep-blue hover:text-warm-beige transition-colors duration-300">
                {item.title}
              </Link>
              {item.subpages && (
                <ul className="mt-4 space-y-2">
                  {item.subpages.map((subpage, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subpage.path} className="text-lg text-gray-700 hover:text-warm-beige transition-colors duration-300">
                        {subpage.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/sitemap.xml" 
            className="inline-block bg-deep-blue text-soft-white px-6 py-3 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors duration-300"
          >
            View XML Sitemap
          </Link>
        </div>
      </main>
    </div>
  )
}
