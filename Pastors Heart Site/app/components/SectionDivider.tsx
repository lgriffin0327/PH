import Image from 'next/image'

export default function SectionDivider() {
  return (
    <div className="relative h-16">
      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-[#F7F9F9] rounded-full p-2 shadow-lg">
          <Image src="/arrow-down.webp" alt="Scroll down" width={40} height={40} />
        </div>
      </div>
    </div>
  )
}
