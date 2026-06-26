import "./TopCompanies.css";

const companies = [
  {
    id: 1,
    logo: "G",
    name: "Google",
    industry: "Technology",
    jobs: "45 Open Jobs",
    rating: "4.8",
  },
  {
    id: 2,
    logo: "M",
    name: "Microsoft",
    industry: "Software",
    jobs: "38 Open Jobs",
    rating: "4.7",
  },
  {
    id: 3,
    logo: "A",
    name: "Amazon",
    industry: "E-Commerce",
    jobs: "52 Open Jobs",
    rating: "4.6",
  },
  {
    id: 4,
    logo: "I",
    name: "Infosys",
    industry: "IT Services",
    jobs: "30 Open Jobs",
    rating: "4.4",
  },
  {
    id: 5,
    logo: "T",
    name: "TCS",
    industry: "IT Services",
    jobs: "41 Open Jobs",
    rating: "4.5",
  },
  {
    id: 6,
    logo: "A",
    name: "Accenture",
    industry: "Consulting",
    jobs: "36 Open Jobs",
    rating: "4.5",
  },
];

function TopCompanies() {
  return (
    <section className="companies">
      <div className="companies-title">
        <h2>Top Companies Hiring</h2>
        <p>Discover leading companies actively hiring talented professionals.</p>
      </div>

      <div className="companies-container">
        {companies.map((company) => (
          <div className="company-card" key={company.id}>
            <div className="company-logo">
              {company.logo}
            </div>

            <h3>{company.name}</h3>

            <p>{company.industry}</p>

            <span>{company.jobs}</span>

            <div className="company-footer">
              <p>⭐ {company.rating}</p>

              <button>View Jobs</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCompanies;