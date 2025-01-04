import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-[#2C3E50] text-[#F7F9F9] py-20 pb-32">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">You deserve to be happy.</h1>
        <p className="text-xl mb-8 text-center">What type of Christian counseling are you looking for?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Individual Counsel', 'Couples Counseling', 'Teen Counseling'].map((type) => (
            <div key={type} className="flex flex-col items-center">
              <div className="bg-[#B1A976] p-4 rounded-full mb-4">
                <Image 
                  src={`/${type.toLowerCase().replace(' ', '-')}.webp`} 
                  alt={type} 
                  width={100} 
                  height={100}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{type}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
