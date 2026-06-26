import "./PopularCategory.css";

const categories = [
  {
    id: 1,
    title: "Frontend",
    jobs: "120 Jobs",
    icon: "💻",
  },
  {
    id: 2,
    title: "Backend",
    jobs: "95 Jobs",
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Full Stack",
    jobs: "80 Jobs",
    icon: "🖥️",
  },
  {
    id: 4,
    title: "UI/UX",
    jobs: "60 Jobs",
    icon: "🎨",
  },
  {
    id: 5,
    title: "Mobile App",
    jobs: "45 Jobs",
    icon: "📱",
  },
  {
    id: 6,
    title: "DevOps",
    jobs: "30 Jobs",
    icon: "☁️",
  },
];

function PopularCategory() {
  return (
    <section className="category">
      <div className="category-title">
        <h2>Popular Categories</h2>
        <p>Browse jobs by your favorite technology.</p>
      </div>

      <div className="category-container">
        {categories.map((item) => (
          <div className="category-card" key={item.id}>
            <div className="category-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.jobs}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategory;