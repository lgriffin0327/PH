import Image from 'next/image'

export default function Therapists() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Professional, licensed, and vetted Christian therapists who you can trust</h2>
        <p className="mb-8">Our Christian counselors are experienced in addressing a wide range of mental health issues from a biblical perspective. Each therapist is a licensed mental health professional and has been carefully vetted to ensure they align with Christian values and principles.</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Image key={i} src={`/therapist-${i}.jpg`} alt={`Therapist ${i}`} width={150} height={150} className="rounded-full" />
          ))}
        </div>
        <button className="mt-8 bg-green-800 text-white px-6 py-2 rounded-full">Get matched with a therapist</button>
      </div>
    </section>
  )
}
