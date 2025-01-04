export const metadata = {
  title: "Individual Counseling - Pastor's Heart Counseling",
  description: "One-on-one Christian therapy sessions addressing personal challenges, spiritual growth, and mental health concerns.",
}

export default function IndividualCounseling() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Individual Counseling</h1>
        <p className="text-lg mb-8">Our individual counseling sessions provide a safe, confidential space for you to explore your thoughts, feelings, and challenges with a licensed Christian therapist.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Personalized treatment plans tailored to your unique needs and goals</li>
          <li>Integration of biblical principles with evidence-based therapeutic techniques</li>
          <li>Guidance in developing coping strategies and problem-solving skills</li>
          <li>Support in exploring and strengthening your faith as part of your healing journey</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Common Issues Addressed</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Anxiety and depression</li>
          <li>Stress management</li>
          <li>Grief and loss</li>
          <li>Self-esteem and personal growth</li>
          <li>Spiritual struggles and questions of faith</li>
        </ul>

        <p className="mb-8">Whether you're facing a specific challenge or seeking overall personal growth, our individual counseling services can provide the support and guidance you need.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
