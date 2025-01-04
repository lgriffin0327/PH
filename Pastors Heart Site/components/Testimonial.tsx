import Image from 'next/image'

export default function Testimonial() {
  return (
    <section className="w-full py-16 bg-yellow-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/testimonial-image.png" alt="Testimonial" width={400} height={400} />
          </div>
          <div className="md:w-1/2">
            <blockquote className="text-2xl italic mb-4">
              "I can actually see progress in my mental health which is something I haven't seen after 15 years and 5 therapists in person."
            </blockquote>
            <p className="font-semibold">- Sarah, 32 years old</p>
          </div>
        </div>
      </div>
    </section>
  )
}
