import "./WhyChooseUs.css";

const features = [
  {
    id: 1,
    icon: "🚀",
    title: "Fast Job Search",
    description:
      "Find thousands of jobs instantly using smart search and filters.",
  },
  {
    id: 2,
    icon: "🏢",
    title: "Top Companies",
    description:
      "Apply to jobs from trusted companies hiring across India.",
  },
  {
    id: 3,
    icon: "🔒",
    title: "Secure Platform",
    description:
      "Your profile and personal information stay safe and protected.",
  },
  {
    id: 4,
    icon: "💼",
    title: "Career Growth",
    description:
      "Explore opportunities that match your skills and career goals.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-title">
        <h2>Why Choose Us?</h2>
        <p>
          We make your job search faster, easier, and more reliable.
        </p>
      </div>

      <div className="why-container">
        {features.map((feature) => (
          <div className="why-card" key={feature.id}>
            <div className="why-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;