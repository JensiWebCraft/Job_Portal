import "./JobsSearch.css";

function JobsSearch() {
  return (
    <section className="jobs-search">
      <div className="search-container">

        <div className="input-group">
          <label>Job Title</label>
          <input
            type="text"
            placeholder="Frontend Developer"
          />
        </div>

        <div className="input-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Ahmedabad"
          />
        </div>

        <div className="input-group">
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
          Search Jobs
        </button>

      </div>
    </section>
  );
}

export default JobsSearch;