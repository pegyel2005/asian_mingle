import React, { useState } from "react";
import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "friendfinder"), {
        email,
        createdAt: serverTimestamp(),
      });
      setMessage("Thanks! We’ll connect you soon.");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("Oops—something went wrong.");
    }
  };

  return (
    <div className="App">
      <header className="hero">
        <h1>Bhutanese Connect</h1>
        <p className="tagline">
          Find and befriend fellow Bhutanese in Australia
        </p>

        <form onSubmit={handleSubmit} className="waitlist-form">
          <input
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="cta-button">
            Join the Friend Finder
          </button>
        </form>

        {message && <p className="feedback">{message}</p>}
      </header>
    </div>
  );
}

export default App;
