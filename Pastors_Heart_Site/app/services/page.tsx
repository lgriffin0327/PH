import Head from 'next/head'
import Link from 'next/link'

export const metadata = {
  title: "Our Services - Pastor's Heart Counseling",
  description: "Explore our range of Christian counseling services including individual therapy, couples counseling, and teen support.",
}

export default function Services() {
  const services = [
    {
      title: "Individual Counseling",
      description: "One-on-one therapy sessions addressing personal challenges, spiritual growth, and mental health concerns.",
      link: "/services/individual-counseling"
    },
    {
      title: "Couples Counseling",
      description: "Faith-based therapy to strengthen relationships, improve communication, and resolve conflicts.",
      link: "/services/couples-counseling"
    },
    {
      title: "Teen Counseling",
      description: "Specialized support for adolescents dealing with faith, identity, and mental health issues.",
      link: "/services/teen-counseling"
    },
    {
      title: "Family Therapy",
      description: "Counseling to improve family dynamics, resolve conflicts, and strengthen bonds through a Christian perspective.",
      link: "/services/family-therapy"
    },
    {
      title: "Grief and Loss Counseling",
      description: "Support for those experiencing loss, helping to navigate grief with faith-based coping strategies.",
      link: "/services/grief-and-loss"
    },
    {
      title: "Addiction Recovery",
      description: "Christ-centered approach to overcoming addictions and developing healthy coping mechanisms.",
      link: "/services/addiction-recovery"
    },
  ];

  return (
    <div className="bg-soft-white min-h-screen">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Our Services</h1>
        <p className="text-lg mb-8">At Pastor's Heart Counseling, we offer a range of Christian counseling services to support your mental, emotional, and spiritual well-being.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-deep-blue mb-4">{service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <Link href={service.link} className="text-deep-blue hover:text-warm-beige underline">
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
