export default function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! You'll be notified at launch.");
  };

  return (
    <main className="container">
      <img src="/logo.png" alt="Brand Logo" className="logo" />

      <h1>Brew the Royal Tradition</h1>

      <p className="description">
        A premium instant chai tea premix inspired by royal Indian households.
        Crafted for richness, warmth, and timeless elegance.
      </p>

      <span className="badge">Launching Soon</span>

      <form className="form" onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Notify Me</button>
      </form>

      <div className="socials">
        <a href="#" aria-label="Instagram">📸</a>
        <a href="#" aria-label="Twitter">🐦</a>
        <a href="#" aria-label="Facebook">📘</a>
      </div>
    </main>
  );
}
