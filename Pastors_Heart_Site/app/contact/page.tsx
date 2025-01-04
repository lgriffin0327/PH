import Head from 'next/head'

export const metadata = {
  title: "Contact Pastor's Heart Counseling - Get Support Today",
  description: "Reach out to Pastor's Heart Counseling for Christian online therapy. Contact us to schedule a session or learn more about our services.",
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="contact Christian counselor, schedule therapy, online counseling support, pastoral care contact" />
      </Head>
      <section className="py-12 bg-soft-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-deep-blue">Contact Us</h1>
          <p className="mb-6">We're here to support you on your journey to mental and spiritual well-being. Reach out to us to schedule a session, ask questions, or learn more about our Christian counseling services.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Get in Touch</h2>
          <p className="mb-6">Email: support@pastorsheartcounseling.com</p>
          <p className="mb-6">Phone: (555) 123-4567</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Schedule a Session</h2>
          <p className="mb-6">To schedule your first session or consultation, please fill out our online form or call us directly. We'll match you with a therapist who best fits your needs and preferences.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Hours of Operation</h2>
          <p className="mb-6">Our online platform is available 24/7 for messaging. Live sessions are typically available:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Monday - Friday: 7:00 AM - 9:00 PM EST</li>
            <li>Saturday: 9:00 AM - 5:00 PM EST</li>
            <li>Sunday: Closed</li>
          </ul>
          
          <p>We look forward to walking alongside you in your journey of healing and growth. Don't hesitate to reach out – we're here to help.</p>
        </div>
      </section>
    </>
  )
}
