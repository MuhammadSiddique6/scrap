'use client'

const points = [
  {
    title: 'Fair pricing',
    text: 'Transparent rates on copper, aluminum, iron, and mixed metal scrap.',
    icon: '💰',
  },
  {
    title: 'Fast pickup',
    text: 'Local collection and logistics across Sharjah and nearby industrial areas.',
    icon: '🚚',
  },
  {
    title: 'Sustainable recycling',
    text: 'Responsible processing so your scrap stays in the circular economy.',
    icon: '♻️',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="container py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Why Choose Us</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {points.map((point) => (
          <div
            key={point.title}
            className="card group cursor-default transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-3xl transition group-hover:scale-110">{point.icon}</div>
            <h3 className="mt-3 font-semibold text-lg">{point.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{point.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
