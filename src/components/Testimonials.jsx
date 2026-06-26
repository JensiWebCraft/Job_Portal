import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=11",
    name: "Rahul Sharma",
    role: "Frontend Developer",
    review:
      "I found my dream React Developer job within two weeks. The application process was smooth and easy.",
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=32",
    name: "Priya Patel",
    role: "UI/UX Designer",
    review:
      "This platform helped me connect with top companies. I highly recommend it to freshers.",
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=15",
    name: "Aman Verma",
    role: "MERN Stack Developer",
    review:
      "The search filters are excellent and I received interview calls very quickly.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial-heading">
        <h2>What Our Users Say</h2>
        <p>
          Hear from professionals who found great career opportunities through
          our platform.
        </p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((user) => (
          <div className="testimonial-card" key={user.id}>
            <img src={user.image} alt={user.name} />

            <div className="stars">⭐⭐⭐⭐⭐</div>

            <p className="review">"{user.review}"</p>

            <h3>{user.name}</h3>

            <span>{user.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;