import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    { title: "Get matched to the best therapist for you", image: "/match.png" },
    { title: "Communicate your way", image: "/communicate.png" },
    { title: "Therapy when you need it", image: "/therapy.png" }
  ]

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">How it works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
              <Image src={step.image} alt={step.title} width={200} height={200} className="mb-4" />
              <p className="text-lg font-semibold text-center">{step.title}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <Image src="/arrow.png" alt="Arrow" width={50} height={50} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
