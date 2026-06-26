import "./SearchSection.css";

function SearchSection() {
  return (
    <section className="search-section">
      <div className="search-container">

        <div className="search-box">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="e.g. Frontend Developer"
          />
        </div>

        <div className="search-box">
          <label>Location</label>
          <input
            type="text"
            placeholder="e.g. Ahmedabad"
          />
        </div>

        <div className="search-box">
          <label>Category</label>
          <select>
            <option>Select Category</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
            <option>UI/UX</option>
            <option>DevOps</option>
            <option>Mobile App</option>
          </select>
        </div>

        <button className="search-btn">
          🔍 Search Jobs
        </button>

      </div>
    </section>
  );
}

export default SearchSection;