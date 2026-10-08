import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";

dotenv.config();

const app = express();

// ============================================================
// MIDDLEWARES
// ============================================================
app.use(express.json({ limit: "1mb" }));

const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:3000",
  "http://localhost:4173",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Autorise les requêtes sans origin (curl, Postman, SSR)
      if (!origin) return callback(null, true);

      // Autorise tout localhost / 127.0.0.1 (n'importe quel port) en dev
      const isLocalhost =
        /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      const isAllowed = allowedOrigins.includes(origin);

      if (isLocalhost || isAllowed) {
        callback(null, true);
      } else {
        console.warn(`⚠️ CORS bloqué pour : ${origin}`);
        callback(new Error("Non autorisé par CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"], // ← OPTIONS ajouté
    credentials: true,
  })
);

// ============================================================
// RATE LIMIT
// ============================================================
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: "Trop de messages envoyés. Réessayez dans 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// ============================================================
// TRANSPORTER NODEMAILER
// ============================================================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("❌ Erreur SMTP :", error.message);
    console.error("   → Vérifie EMAIL_USER et EMAIL_PASS dans .env");
  } else {
    console.log("✅ Serveur prêt à envoyer des emails");
  }
});

// ============================================================
// ROUTES
// ============================================================

app.get("/", (req, res) => {
  res.json({
    status: "API opérationnelle ✅",
    endpoints: {
      contact: "POST /api/contact",
      health: "GET /api/health",
    },
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// POST /api/contact
// Accepte { nom | name, email, message, subject? }
// ============================================================
app.post("/api/contact", limiter, async (req, res) => {
  console.log("📩 Requête reçue :", req.body);

  // 🔄 Compatibilité front (nom) ↔ back (name)
  const name = req.body.name || req.body.nom;
  const { email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Champs obligatoires manquants (nom, email, message).",
    });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Adresse email invalide." });
  }

  // 🛡️ Échappement HTML basique pour éviter l'injection
  const escape = (str = "") =>
    String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escape(name);
  const safeEmail = escape(email);
  const safeSubject = escape(subject);
  const safeMessage = escape(message).replace(/\n/g, "<br>");

  try {
    const info = await transporter.sendMail({
      from: `"${safeName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: subject
        ? `[Contact] ${safeSubject}`
        : `[Contact] Nouveau message de ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;padding:20px;">
          <h2 style="color:#ea580c;">Pain-Doré</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Sujet :</strong> ${safeSubject || "Non précisé"}</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
          <p style="white-space:pre-wrap;">${safeMessage}</p>
        </div>
      `,
    });

    console.log("✅ Email envoyé :", info.messageId);
    res.status(200).json({ success: "Message envoyé avec succès !" });
  } catch (err) {
    console.error("❌ Erreur envoi :", err.message);
    res.status(500).json({
      error: "Erreur lors de l'envoi. Réessayez plus tard.",
    });
  }
});

// ============================================================
// 404
// ============================================================
app.use((req, res) => {
  res.status(404).json({
    message: `Route ${req.method} ${req.originalUrl} introuvable`,
    hint: "Vérifie l'URL ou la méthode HTTP utilisée.",
    availableRoutes: ["GET  /", "GET  /api/health", "POST /api/contact"],
  });
});

// ============================================================
// GESTION D'ERREURS GLOBALE
// ============================================================
app.use((err, req, res, next) => {
  console.error("❌ Erreur serveur :", err.message);
  res.status(500).json({ error: "Erreur interne du serveur." });
});

// ============================================================
// DÉMARRAGE
// ============================================================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("═══════════════════════════════════════════");
  console.log(`🚀 Serveur sur http://localhost:${PORT}`);
  console.log(`📧 Email : ${process.env.EMAIL_USER || "❌ non défini"}`);
  console.log(`📥 Destinataire : ${process.env.RECIPIENT_EMAIL || "❌ non défini"}`);
  console.log("═══════════════════════════════════════════");
});