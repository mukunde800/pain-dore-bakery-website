// test-smtp.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// ============================================================
// AFFICHAGE DES INFOS DE CONFIGURATION
// ============================================================
console.log("═══════════════════════════════════════════");
console.log("🔍 Test de connexion SMTP Gmail...");
console.log("═══════════════════════════════════════════");
console.log(`📧 Email expéditeur : ${process.env.EMAIL_USER || "❌ non défini"}`);
console.log(`📥 Email destinataire : ${process.env.RECIPIENT_EMAIL || "❌ non défini"}`);
console.log(`🔑 Mot de passe : ${process.env.EMAIL_PASS ? "✅ présent" : "❌ manquant"}`);

if (process.env.EMAIL_PASS) {
  // Affiche seulement la longueur (sécurité) pour vérifier qu'il n'y a pas d'espaces
  const passLength = process.env.EMAIL_PASS.length;
  const hasSpaces = /\s/.test(process.env.EMAIL_PASS);
  console.log(`📏 Longueur du mot de passe : ${passLength} caractères ${passLength === 16 ? "✅" : "⚠️ (attendu : 16)"}`);
  console.log(`🚫 Contient des espaces : ${hasSpaces ? "❌ OUI (à supprimer !)" : "✅ non"}`);
}

console.log("───────────────────────────────────────────");

// ============================================================
// CONFIGURATION DU TRANSPORTER
// ============================================================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // Timeout pour éviter d'attendre indéfiniment
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

// ============================================================
// VÉRIFICATION DE LA CONNEXION
// ============================================================
transporter.verify((err, success) => {
  if (err) {
    console.error("\n❌ Échec de connexion :", err.message);
    console.error("\n👉 Solutions possibles :");
    console.error("   1. Vérifie que le mot de passe d'application est SANS espaces");
    console.error("   2. Vérifie que la 2FA est activée sur ton compte Google");
    console.error("   3. Régénère un nouveau mot de passe d'application");
    console.error("   4. Va sur https://accounts.google.com/DisplayUnlockCaptcha");
    console.error("   5. Vérifie que le fichier .env est bien à la racine du projet");
    console.error("   6. Vérifie que les variables EMAIL_USER et EMAIL_PASS sont bien définies");

    // Diagnostic supplémentaire selon le type d'erreur
    if (err.code === "EAUTH") {
      console.error("\n🔐 Erreur d'authentification (EAUTH) :");
      console.error("   → Le mot de passe d'application est incorrect ou expiré.");
      console.error("   → Régénère-le sur https://myaccount.google.com/apppasswords");
    } else if (err.code === "ECONNECTION" || err.code === "ETIMEDOUT") {
      console.error("\n🌐 Erreur réseau (ECONNECTION / ETIMEDOUT) :");
      console.error("   → Vérifie ta connexion Internet.");
      console.error("   → Un pare-feu bloque peut-être le port 465.");
      console.error("   → Essaie le port 587 avec secure: false.");
    } else if (err.code === "ESOCKET") {
      console.error("\n🔌 Erreur socket (ESOCKET) :");
      console.error("   → Le port 465 est peut-être bloqué par ton FAI.");
      console.error("   → Essaie le port 587 à la place.");
    }

    console.error("\n═══════════════════════════════════════════");
    process.exit(1);
  } else {
    console.log("\n✅ Connexion SMTP réussie !");
    console.log("✅ Ton serveur est prêt à envoyer des emails");
    console.log(`   → Destinataire configuré : ${process.env.RECIPIENT_EMAIL || "❌ non défini"}`);
    console.log("═══════════════════════════════════════════");
    process.exit(0);
  }
});