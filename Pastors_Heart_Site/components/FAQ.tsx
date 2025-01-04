export default function FAQ() {
  const faqs = [
    { question: "What can I expect from therapy?", answer: "..." },
    { question: "How do I get started?", answer: "..." },
    { question: "Is Pastor's Heart right for me?", answer: "..." },
    { question: "How much does it cost?", answer: "..." },
    { question: "What if I don't like my therapist?", answer: "..." },
    { question: "Can I use insurance?", answer: "..." },
    { question: "How long are the sessions?", answer: "..." },
    { question: "Is Pastor's Heart HIPAA compliant?", answer: "..." }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-800 text-white px-6 py-2 rounded-full">See more FAQs</button>
        </div>
      </div>
    </section>
  )
}
