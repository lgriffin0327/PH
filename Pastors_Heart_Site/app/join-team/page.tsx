import Head from 'next/head'

export const metadata = {
  title: "Join Our Team - Pastor's Heart Counseling",
  description: "Become a Christian counselor with Pastor's Heart Counseling. Use your pastoral experience to provide online therapy and make a difference in people's lives.",
}

export default function JoinTeam() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Christian counselor jobs, pastoral counseling careers, online therapy positions, faith-based mental health" />
      </Head>
      <section className="py-12 bg-soft-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-deep-blue">Join Our Team of Christian Counselors</h1>
          <p className="mb-6">At Pastor's Heart Counseling, we're always looking for passionate, qualified Christian counselors to join our team. If you're a pastor or licensed therapist with a heart for combining faith and mental health care, we'd love to hear from you.</p>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Why Join Us?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Flexible online work environment</li>
            <li>Opportunity to integrate faith into your counseling practice</li>
            <li>Competitive compensation</li>
            <li>Supportive community of like-minded professionals</li>
            <li>Ongoing professional development and training</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">Requirements</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Master's degree or higher in counseling, psychology, or related field</li>
            <li>Current license to practice in your state</li>
            <li>Minimum of 2 years of counseling experience</li>
            <li>Strong Christian faith and ability to integrate faith into counseling</li>
            <li>Excellent communication skills and comfort with online platforms</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mb-4 text-deep-blue">How to Apply</h2>
          <p className="mb-6">To apply, please fill out the form below. We'll review your application and contact you for next steps if there's a good fit.</p>
          
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-deep-blue mb-2">Full Name</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-deep-blue mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="license" className="block text-deep-blue mb-2">License Type and Number</label>
              <input type="text" id="license" name="license" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="experience" className="block text-deep-blue mb-2">Years of Experience</label>
              <input type="number" id="experience" name="experience" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-deep-blue mb-2">Why do you want to join Pastor's Heart Counseling?</label>
              <textarea id="message" name="message" rows={4} className="w-full p-2 border border-gray-300 rounded" required></textarea>
            </div>
            <button type="submit" className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-olive-green transition-colors">Submit Application</button>
          </form>
        </div>
      </section>
    </>
  )
}
