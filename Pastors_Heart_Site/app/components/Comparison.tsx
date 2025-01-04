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
    <section className="w-full py-16 bg-[#E6D5B8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3E50]">Pastor's Heart vs. traditional in-office therapy</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="font-semibold text-[#2C3E50]">Feature</div>
          <div className="font-semibold text-center text-[#2C3E50]">Pastor's Heart</div>
          <div className="font-semibold text-center text-[#2C3E50]">In-office</div>
          {features.map((feature, index) => (
            <>
              <div key={`feature-${index}`} className="text-[#2C3E50]">{feature}</div>
              <div key={`ph-${index}`} className="text-center text-[#B1A976]">✓</div>
              <div key={`io-${index}`} className="text-center text-[#C99E9E]">{index < 4 ? '✓' : '✗'}</div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
