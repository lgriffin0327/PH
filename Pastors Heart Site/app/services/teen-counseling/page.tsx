export const metadata = {
  title: "Teen Counseling - Pastor's Heart Counseling",
  description: "Specialized Christian counseling support for adolescents dealing with faith, identity, and mental health issues.",
}

export default function TeenCounseling() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Teen Counseling</h1>
        <p className="text-lg mb-8">Our teen counseling services provide a safe, understanding space for adolescents to explore their faith, identity, and mental health with the guidance of experienced Christian counselors.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Age-appropriate counseling techniques that engage teens</li>
          <li>Integration of faith principles with modern psychological approaches</li>
          <li>Support in developing healthy coping mechanisms and life skills</li>
          <li>Collaboration with parents when appropriate, respecting teen's privacy</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Common Issues Addressed</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Anxiety and depression in teens</li>
          <li>Peer pressure and social challenges</li>
          <li>Family conflicts and communication</li>
          <li>Faith questions and spiritual growth</li>
          <li>Self-esteem and identity formation</li>
        </ul>

        <p className="mb-8">Our teen counseling services aim to support adolescents through the unique challenges of their formative years, helping them build a strong foundation of faith and emotional well-being.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
