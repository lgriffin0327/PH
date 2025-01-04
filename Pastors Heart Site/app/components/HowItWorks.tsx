import Image from 'next/image'

export default function HowItWorks() {
  const steps = [
    { title: "Get matched to the best therapist for you", image: "/match.webp" },
    { title: "Communicate your way", image: "/communicate.webp" },
    { title: "Therapy when you need it", image: "/therapy.webp" }
  ]

  return (
    <section className="w-full py-16 bg-[#F7F9F9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3E50]">How it works</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 md:mb-0 md:w-1/3">
              <div className="bg-[#B1A976] p-4 rounded-full mb-4">
                <Image src={step.image} alt={step.title} width={200} height={200} className="rounded-full" />
              </div>
              <p className="text-lg font-semibold text-center text-[#2C3E50]">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
