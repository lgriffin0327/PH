import Image from 'next/image'

export default function GiftMembership() {
  return (
    <section className="w-full py-16 bg-[#B1A976]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/gift-card.webp" alt="Gift Membership" width={400} height={300} />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-[#2C3E50]">Give the gift of a Pastor's Heart membership</h2>
            <p className="mb-8 text-[#2C3E50]">Help someone special access the support they need with a Pastor's Heart gift card.</p>
            <button className="bg-[#2C3E50] text-[#F7F9F9] px-6 py-2 rounded-full">Send a gift card</button>
          </div>
        </div>
      </div>
    </section>
  )
}
