import { BookOpen, Sprout, Heart } from "lucide-react"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Child Education Support",
      description:
        "We provide quality education, scholarships, and learning materials to underprivileged children, ensuring they have access to the knowledge and skills needed for a better future.",
      icon: BookOpen,
      image: "/indian-children-studying-in-classroom-with-books-a.jpg",
    },
    {
      id: 2,
      title: "Rural Development",
      description:
        "Our rural development initiatives focus on infrastructure improvement, skill training, and economic empowerment programs that help communities become self-sufficient.",
      icon: Sprout,
      image: "/rural-india-village-with-farmers-and-agricultural-.jpg",
    },
    {
      id: 3,
      title: "Food & Health Assistance",
      description:
        "We ensure nutritional support and access to basic healthcare services for vulnerable populations, promoting overall health and well-being in underserved communities.",
      icon: Heart,
      image: "/healthcare-workers-helping-indian-children-with-nu.jpg",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What We Do</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive programs address the most pressing needs of underprivileged communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Service Image */}
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-primary" size={28} />
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
