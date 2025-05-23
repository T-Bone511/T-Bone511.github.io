import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [step, setStep] = useState("whoami");
  const [name, setName] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const PASSWORD = "letmein"; // you can change this

  useEffect(() => {
    const inputEl = document.getElementById("terminal-input");
    if (inputEl) inputEl.focus();
    document.body.style.cursor =
      "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjgiIGZpbGw9IiMzM2ZmMzMiIC8+PC9zdmc+'), auto";
    document.body.classList.add("crt-glow");
    return () => {
      document.body.classList.remove("crt-glow");
    };
  }, [step]);

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedInput = input.trim();

    if (step === "whoami") {
      setName(trimmedInput);
      setInput("");
      setStep("password");
      setError("");
    } else if (step === "password") {
      if (trimmedInput === PASSWORD) {
        setStep("access");
        setError("");
      } else {
        setError("Incorrect password.");
        setInput("");
      }
    }
  };

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const renderPrompt = () => {
    if (step === "whoami") return <span>whoami:</span>;
    if (step === "password") return <span>password:</span>;
    return null;
  };

  return (
    <div className="terminal-container">
      <audio ref={audioRef} src="/typing.mp3" preload="auto" />
      {step !== "access" ? (
        <form onSubmit={handleInput} className="terminal">
          <div className="terminal-line">
            {renderPrompt()}{" "}
            <input
              id="terminal-input"
              value={input}
              onChange={handleTyping}
              autoFocus
              type={step === "password" ? "password" : "text"}
            />
          </div>
          {error && <div className="error">{error}</div>}
        </form>
      ) : (
        <div className="terminal">
          <div className="terminal-line">Welcome, {name}. Access granted.</div>
          <div className="terminal-line">Loading portfolio...</div>
          <PortfolioPage name={name} />
        </div>
      )}
    </div>
  );
}

function PortfolioPage({ name }: { name: string }) {
  return (
    <div className="portfolio">
      <div className="terminal-line">[Portfolio page for {name} here]</div>
      {/* Add your personal/portfolio content here */}
    </div>
  );
}

export default App;
