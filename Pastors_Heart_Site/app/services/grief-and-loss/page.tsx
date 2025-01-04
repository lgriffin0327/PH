export const metadata = {
  title: "Grief and Loss Counseling - Pastor's Heart Counseling",
  description: "Faith-based support for those experiencing loss, helping to navigate grief with Christian coping strategies.",
}

export default function GriefAndLossCounseling() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Grief and Loss Counseling</h1>
        <p className="text-lg mb-8">Our grief and loss counseling services offer compassionate, faith-based support to help you navigate the difficult journey of loss and find hope and healing through Christ.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>A safe space to express and process your grief</li>
          <li>Integration of biblical comfort with grief counseling techniques</li>
          <li>Support in finding meaning and hope in the midst of loss</li>
          <li>Guidance in developing faith-based coping strategies</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Types of Loss We Address</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Loss of a loved one</li>
          <li>Relationship breakups or divorce</li>
          <li>Job loss or career changes</li>
          <li>Loss of health or mobility</li>
          <li>Spiritual losses or crises of faith</li>
        </ul>

        <p className="mb-8">Our grief and loss counseling aims to support you through your journey of grief, helping you find strength in your faith and move towards healing and renewed purpose.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
