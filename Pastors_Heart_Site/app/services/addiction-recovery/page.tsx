export const metadata = {
  title: "Addiction Recovery - Pastor's Heart Counseling",
  description: "Christ-centered approach to overcoming addictions and developing healthy coping mechanisms.",
}

export default function AddictionRecovery() {
  return (
    <div className="bg-soft-white min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-deep-blue mb-8">Addiction Recovery</h1>
        <p className="text-lg mb-8">Our addiction recovery program combines evidence-based treatment methods with Christian principles to support you in overcoming addiction and rebuilding your life on a foundation of faith.</p>
        
        <h2 className="text-2xl font-semibold text-deep-blue mb-4">What to Expect</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Personalized treatment plans integrating faith and recovery principles</li>
          <li>Support in developing a stronger relationship with God as part of recovery</li>
          <li>Guidance in identifying and addressing the root causes of addiction</li>
          <li>Tools for relapse prevention and building a support network</li>
        </ul>

        <h2 className="text-2xl font-semibold text-deep-blue mb-4">Types of Addictions We Address</h2>
        <ul className="list-disc pl-5 mb-8">
          <li>Substance abuse (drugs and alcohol)</li>
          <li>Behavioral addictions (gambling, internet, etc.)</li>
          <li>Co-occurring disorders (addiction with mental health issues)</li>
          <li>Sexual addictions</li>
          <li>Food and eating disorders</li>
        </ul>

        <p className="mb-8">Our addiction recovery services aim to help you break free from the chains of addiction, restore your relationships, and rediscover your purpose through Christ's healing power.</p>

        <button className="bg-deep-blue text-soft-white px-6 py-2 rounded-full hover:bg-warm-beige hover:text-deep-blue transition-colors">
          Schedule a Session
        </button>
      </main>
    </div>
  )
}
