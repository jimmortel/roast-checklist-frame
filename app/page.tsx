export default function Frame() {
  return (
    <div style={{ 
      padding: "40px", 
      textAlign: "center", 
      background: "linear-gradient(to bottom, #1a1a1a, #000)", 
      color: "#fff", 
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🔥 Roast or Praise?</h1>
      <p style={{ fontSize: "1.2rem", color: "#888" }}>The First Bilingual Degen Machine</p>
      
      <div style={{ marginTop: "30px", display: "grid", gap: "15px" }}>
        <button style={{ padding: "15px 30px", fontSize: "1rem", background: "#7c3aed", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold" }}>
          🇬🇧 English Roast
        </button>
        <button style={{ padding: "15px 30px", fontSize: "1rem", background: "#3b82f6", color: "white", border: "none", borderRadius: "12px", fontWeight: "bold" }}>
          🇫🇷 Roast Français
        </button>
      </div>
      
      <p style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.6 }}>
        Build by Jimmortel 🔵
      </p>
    </div>
  );
          }
