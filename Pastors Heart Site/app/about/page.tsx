import Head from 'next/head'

export const metadata = {
  title: "About Pastor's Heart Counseling - Our Mission and Values",
  description: "Learn about Pastor's Heart Counseling's mission to provide Christ-centered, professional mental health care. Discover our values and commitment to your well-being.",
}

export default function About() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Christian counseling, mission statement, core values, faith-based therapy, mental health" />
      </Head>
      <section className="py-12 bg-soft-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-deep-blue">About Pastor's Heart Counseling</h1>
          <p className="mb-6">At Pastor's Heart Counseling, we believe in the power of faith-integrated therapy to heal and transform lives. Our mission is to provide accessible, professional mental health care that honors your Christian faith and values.</p>
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Our Mission</h2>
          <p className="mb-6">We strive to bridge the gap between mental health and spiritual well-being, offering a safe space where you can explore your challenges, grow in your faith, and find healing for your mind, body, and spirit.</p>
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Faith Integration: We respect and incorporate your Christian faith into the therapeutic process.</li>
            <li>Professional Excellence: Our therapists are licensed professionals committed to the highest standards of care.</li>
            <li>Compassion: We approach every individual with empathy, understanding, and Christ-like love.</li>
            <li>Accessibility: We believe quality mental health care should be available to all, regardless of location or schedule.</li>
            <li>Confidentiality: Your privacy and trust are paramount in our practice.</li>
          </ul>
          <p>Join us on a journey of healing, growth, and spiritual renewal. At Pastor's Heart Counseling, you're not just a client – you're a cherished child of God deserving of compassionate, professional care.</p>
        </div>
      </section>
    </>
  )
}
