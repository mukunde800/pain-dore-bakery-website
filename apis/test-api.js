const API_URL = "http://localhost:5000";

const testRoot = async () => {
  console.log("🔍 Test 1 : GET /");
  try {
    const res = await fetch(`${API_URL}/`);
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

const testHealth = async () => {
  console.log("\n🔍 Test 2 : GET /api/health");
  try {
    const res = await fetch(`${API_URL}/api/health`);
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

const testContact = async () => {
  console.log("\n🔍 Test 3 : POST /api/contact");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Test Node.js",
        email: "test@example.com",
        subject: "Test depuis test-api.js",
        message: "Ceci est un test automatique. Si tu reçois ce mail, tout fonctionne ! 🎉",
      }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status}`);
    console.log(`   Réponse:`, data);
    return res.status === 200;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

const testContactInvalid = async () => {
  console.log("\n🔍 Test 4 : POST /api/contact (données invalides)");
  try {
    const res = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "", email: "pas-un-email", message: "" }),
    });
    const data = await res.json();
    console.log(`   Status: ${res.status} (attendu: 400)`);
    console.log(`   Réponse:`, data);
    return res.status === 400;
  } catch (err) {
    console.error("   ❌ Erreur :", err.message);
    return false;
  }
};

const runAllTests = async () => {
  console.log("═══════════════════════════════════════════");
  console.log("🧪 TESTS DE L'API CONTACT");
  console.log("═══════════════════════════════════════════\n");

  const results = {
    "GET /": await testRoot(),
    "GET /api/health": await testHealth(),
    "POST /api/contact": await testContact(),
    "POST /api/contact (invalide)": await testContactInvalid(),
  };

  console.log("\n═══════════════════════════════════════════");
  console.log("📊 RÉSULTATS");
  console.log("═══════════════════════════════════════════");
  Object.entries(results).forEach(([name, success]) => {
    console.log(`${success ? "✅" : "❌"} ${name}`);
  });
  console.log("═══════════════════════════════════════════");

  const allPassed = Object.values(results).every(Boolean);
  process.exit(allPassed ? 0 : 1);
};

runAllTests();