export default function Stats() {
  return (
    <section className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">The world's largest Christian counseling service, 100% online.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold text-green-800">400,000+</p>
            <p>Counseling sessions</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">25,000+</p>
            <p>Licensed therapists</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">3,000,000+</p>
            <p>Lives improved</p>
          </div>
        </div>
      </div>
    </section>
  )
}
