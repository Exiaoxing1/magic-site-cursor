const features = [
  {
    title: 'Intuitive Design',
    description: 'Create beautiful websites with our drag-and-drop interface and pre-built components.',
    icon: '🎨'
  },
  {
    title: 'Responsive',
    description: 'Your site will look great on any device, from mobile phones to desktop computers.',
    icon: '📱'
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed with next-generation performance features built-in.',
    icon: '⚡'
  },
  {
    title: 'SEO Friendly',
    description: 'Built with best practices for search engine optimization from the ground up.',
    icon: '🔍'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides all the tools and features you need to create an outstanding website.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 