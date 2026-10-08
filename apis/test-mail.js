import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Test de connexion SMTP Gmail...");
console.log(`📧 Email : ${process.env.EMAIL_USER}`);
console.log(`🔑 Mot de passe : ${process.env.EMAIL_PASS ? "✅ présent" : "❌ manquant"}`);
console.log("───────────────────────────────────────────");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err, success) => {
  if (err) {
    console.error("❌ Échec de connexion :", err.message);
    console.error("\n👉 Solutions possibles :");
    console.error("   1. Vérifie que le mot de passe d'application est SANS espaces");
    console.error("   2. Vérifie que la 2FA est activée sur ton compte Google");
    console.error("   3. Régénère un nouveau mot de passe d'application");
    console.error("   4. Va sur https://accounts.google.com/DisplayUnlockCaptcha");
    process.exit(1);
  } else {
    console.log("✅ Connexion SMTP réussie !");
    console.log("✅ Ton serveur est prêt à envoyer des emails");
    process.exit(0);
  }
});