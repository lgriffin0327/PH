export const metadata = {
  title: "Family Therapy - Pastor's Heart Counseling",
  description: "Christian-based family counseling to improve dynamics, resolve conflicts, and strengthen bonds through faith.",
}

export default function FamilyTherapy() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Family Therapy</h1>
        <p className="text-lg mb-8">Our family therapy sessions offer a Christ-centered approach to healing and strengthening family relationships, addressing conflicts, and improving communication among family members.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Collaborative sessions involving multiple family members</li>
          <li>Faith-based strategies for conflict resolution and communication</li>
          <li>Exploration of family dynamics and roles</li>
          <li>Guidance in creating a nurturing, Christ-centered family environment</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Common Issues Addressed</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Parent-child conflicts</li>
          <li>Sibling rivalries</li>
          <li>Blended family challenges</li>
          <li>Family transitions (e.g., divorce, relocation)</li>
          <li>Integrating faith into family life</li>
        </ul>

        <p className="mb-8">Our family therapy services aim to help families build stronger, more harmonious relationships grounded in Christian values and mutual understanding.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
