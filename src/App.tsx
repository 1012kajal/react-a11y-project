import { useState } from "react";
import { add } from "./stringCalculator";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setResult(null);
      alert(err.message);
    }
  };

  const handleAbout = () => {
    alert(
      "Incubyte String Calculator Assignment\n- Built with React\n- TDD Features: negative numbers, custom delimiters, ignore >1000, multiple delimiters, arithmetic +,-,*,/"
    );
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fff",
        color: "#333",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="String Calculator"
        style={{ maxWidth: "100%", height: "auto", marginBottom: "20px", borderRadius: "8px" }}
      />

      <h1 style={{ fontSize: "32px", marginBottom: "15px" }}>String Calculator</h1>

      <label htmlFor="numbersInput" style={{ display: "block", marginBottom: "8px", fontSize: "18px" }}>
        Enter numbers (comma, newline, custom delimiter, or arithmetic +,-,*,/):
      </label>

      <textarea
        id="numbersInput"
        style={{
          width: "100%",
          minHeight: "100px",
          padding: "10px",
          marginBottom: "15px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        placeholder="e.g., 1,2,3 or //;\n1;2 or 100+200"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={handleCalculate}
          style={{
            padding: "12px 25px",
            marginRight: "10px",
            backgroundColor: "#008cba",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Calculate
        </button>

        <button
          onClick={handleAbout}
          style={{
            padding: "12px 25px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          About
        </button>
      </div>

      {result !== null && (
        <p role="status" style={{ color: "green", fontWeight: "bold", fontSize: "18px" }}>
          Result: {result}
        </p>
      )}

      {error && (
        <p role="alert" style={{ color: "red", fontWeight: "bold", fontSize: "16px" }}>
          {error}
        </p>
      )}
    </div>
  );
};

export default App;
