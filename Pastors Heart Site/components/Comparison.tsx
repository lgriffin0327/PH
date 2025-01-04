export default function Comparison() {
  const features = [
    "Flexible scheduling options",
    "Unlimited messaging with your therapist",
    "Video sessions",
    "Phone sessions",
    "Live chat sessions",
    "Therapist matching",
    "Switch therapists anytime",
    "Cancel anytime",
    "Financial aid available",
    "HIPAA compliant"
  ]

  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Pastor's Heart vs. traditional in-office therapy</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold">Feature</div>
          <div className="font-semibold text-center">Pastor's Heart</div>
          <div className="font-semibold text-center">In-office</div>
          {features.map((feature, index) => (
            <>
              <div key={`feature-${index}`}>{feature}</div>
              <div key={`ph-${index}`} className="text-center">✓</div>
              <div key={`io-${index}`} className="text-center">{index < 4 ? '✓' : '✗'}</div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
