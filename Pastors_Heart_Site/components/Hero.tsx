import Image from 'next/image'

export default function Hero() {
  return (
    <section className="w-full bg-green-800 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">You deserve to be happy.</h1>
        <p className="text-xl mb-8">What type of Christian counseling are you looking for?</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Individual Counsel', 'Couples Counseling', 'Teen Counseling'].map((type) => (
            <div key={type} className="bg-green-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">{type}</h3>
              <Image src={`/${type.toLowerCase().replace(' ', '-')}.png`} alt={type} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
