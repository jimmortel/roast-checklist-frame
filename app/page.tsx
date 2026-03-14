"use client";
import { useState } from "react";

export default function Frame() {
  const [result, setResult] = useState("");

  const roastsFr = [
    "50 abonnés  et ça se prend déjà pour le roi de Base.. Redescends, l'ami.",
    "Tu attends tes $DEGEN comme si c'était le RSA. Va bosser sur ta Frame !",
    "Ton profil est plus vide que le carnet d'ordres d'un memecoin mort.",
    "Même les Scammeurs en DM ne prennent pas la peine de t'écrire. Dur.",
    "Ton dernier cast a eu 0 like. Même ta maman ne te suit pas sur Farcaster ?"
  ];

  return (
    <div style={{ 
      padding: "40px", textAlign: "center", background: "#000", color: "#fff", 
      height: "100vh", display: "flex", flexDirection: "column", 
      justifyContent: "center", alignItems: "center", fontFamily: "sans-serif" 
    }}>
      <h1 style={{ color: "#7c3aed", fontSize: "2.5rem", marginBottom: "10px" }}>🔥 ROAST Machine</h1>
      <p style={{ color: "#888", marginBottom: "30px" }}>By Jimmortel 🔵</p>
      
      {!result ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <p style={{ fontSize: "1.2rem" }}>Tu veux la vérité sur ton profil ?</p>
          <button 
            onClick={() => setResult(roastsFr[Math.floor(Math.random() * roastsFr.length)])}
            style={{ padding: "20px 40px", background: "#ef4444", color: "white", border: "none", borderRadius: "50px", fontWeight: "bold", fontSize: "1.2rem", cursor: "pointer" }}>
            CLASH-MOI 🇫🇷
          </button>
        </div>
      ) : (
        <div style={{ padding: "20px", background: "rgba(255,255,255,0.05)", borderRadius: "20px", border: "1px solid #7c3aed" }}>
          <h2 style={{ fontSize: "1.6rem", marginBottom: "40px", lineHeight: "1.4" }}>"{result}"</h2>
          <button onClick={() => setResult("")} style={{ background: "#7c3aed", color: "white", border: "none", padding: "10px 20px", borderRadius: "10px", fontWeight: "bold" }}>🔄 Recommencer</button>
          <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #333" }}>
             <p style={{ color: "#10b981", fontWeight: "bold" }}>💰 $DEGEN CHECKLIST :</p>
             <p style={{ fontSize: "0.9rem" }}>1. Cast tous les jours<br/>2. Reçois 3 tips<br/>3. Donne ton allowance</p>
          </div>
        </div>
      )}
    </div>
  );
}
