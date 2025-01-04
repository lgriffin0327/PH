export const metadata = {
  title: "Couples Counseling - Pastor's Heart Counseling",
  description: "Faith-based therapy to strengthen relationships, improve communication, and resolve conflicts in your marriage or partnership.",
}

export default function CouplesCounseling() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Couples Counseling</h1>
        <p className="text-lg mb-8">Our couples counseling sessions provide a supportive environment for partners to strengthen their relationship through faith-based principles and evidence-based therapeutic techniques.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Improved communication skills and conflict resolution strategies</li>
          <li>Exploration of relationship dynamics through a Christian perspective</li>
          <li>Tools to rebuild trust and intimacy</li>
          <li>Guidance in aligning your relationship with shared faith values</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Common Issues Addressed</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Communication breakdowns</li>
          <li>Infidelity and trust issues</li>
          <li>Premarital counseling</li>
          <li>Blended family challenges</li>
          <li>Intimacy and connection problems</li>
        </ul>

        <p className="mb-8">Whether you're newlyweds, long-term partners, or somewhere in between, our couples counseling can help you build a stronger, more fulfilling relationship rooted in faith.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
