import Image from 'next/image'

export default function Therapists() {
  const therapists = [
    { id: 1, name: "Dr. Sarah Johnson", specialty: "Marriage Counseling" },
    { id: 2, name: "Pastor Mike Williams", specialty: "Grief and Loss" },
    { id: 3, name: "Dr. Emily Chen", specialty: "Anxiety and Depression" },
    { id: 4, name: "Rev. David Brown", specialty: "Youth Counseling" },
    { id: 5, name: "Dr. Rachel Torres", specialty: "Family Therapy" },
    { id: 6, name: "Pastor Tom Nelson", specialty: "Addiction Recovery" },
  ];

  return (
    <section className="w-full py-16 bg-[#E6D5B8]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#2C3E50]">Our Christian Therapists</h2>
        <p className="mb-12 text-center text-[#2C3E50] max-w-3xl mx-auto">
          Our licensed Christian counselors are experienced in addressing a wide range of mental health issues from a biblical perspective. Each therapist has been carefully vetted to ensure they align with Christian values and principles.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <div key={therapist.id} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
              <Image 
                src={`/therapist-${therapist.id}.webp`} 
                alt={therapist.name} 
                width={150} 
                height={150} 
                className="rounded-full mb-4 border-4 border-[#B1A976]"
              />
              <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{therapist.name}</h3>
              <p className="text-[#2C3E50] text-center">{therapist.specialty}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#2C3E50] text-[#F7F9F9] px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#B1A976] transition-colors duration-300">
            Get matched with a therapist
          </button>
        </div>
      </div>
    </section>
  )
}
