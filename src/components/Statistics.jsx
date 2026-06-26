import "./Statistics.css";

const stats = [
  {
    id: 1,
    icon: "💼",
    number: "10,000+",
    title: "Active Jobs",
  },
  {
    id: 2,
    icon: "🏢",
    number: "500+",
    title: "Companies",
  },
  {
    id: 3,
    icon: "👨‍💻",
    number: "25,000+",
    title: "Job Seekers",
  },
  {
    id: 4,
    icon: "🎉",
    number: "8,000+",
    title: "Successful Hires",
  },
];

function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics-title">
        <h2>Our Platform in Numbers</h2>
        <p>
          Trusted by thousands of job seekers and companies across India.
        </p>
      </div>

      <div className="statistics-container">
        {stats.map((item) => (
          <div className="stat-card" key={item.id}>
            <div className="stat-icon">{item.icon}</div>

            <h3>{item.number}</h3>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;