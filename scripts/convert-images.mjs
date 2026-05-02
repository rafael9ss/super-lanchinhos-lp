/**
 * Converte imagens pesadas para WebP usando sharp-cli via npx.
 * Execute: node scripts/convert-images.mjs
 */
import { execSync } from "child_process";
import { existsSync, statSync, readdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "../client/public/images");

// Imagens do carousel (muito pesadas — reduzir e converter)
const CAROUSEL_IMAGES = [
  "bolinho-banana.png",
  "bolinho-cacau.png",
  "bolinho-cenoura.png",
  "esfiha-saudavel.png",
  "pao-batata-doce.png",
  "paozinho-abobora.png",
];

// Imagens gerais pesadas (só converter para webp, sem redimensionar)
const GENERAL_IMAGES = [
  "700-800.png",
  "logo-menu.png",
  "logo.png",
  "favicon.png",
  "depoimento-1.png",
  "depoimento-2.png",
  "depoimento-3.png",
  "depoimento-4.png",
  "bundle-completo.jpg",
  "plano-basico.jpg",
  "bonus-01.jpg",
  "bonus-02.jpg",
  "bonus-03.jpg",
  "bonus-04.jpg",
  "bonus-05.jpg",
  "bonus-07.jpg",
  "bonus-suquinhos.jpg",
  "mockup-hero.jpg",
];

function sizeMB(filePath) {
  if (!existsSync(filePath)) return "N/A";
  return (statSync(filePath).size / 1024 / 1024).toFixed(2) + " MB";
}

function run(cmd) {
  console.log(`\n▶ ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit", cwd: path.join(__dirname, "..") });
  } catch (e) {
    console.error("❌ Erro ao executar:", e.message);
  }
}

console.log("🚀 Iniciando conversão de imagens para WebP...\n");

// === 1) Carousel — redimensionar para 800px de largura + WebP qualidade 82 ===
console.log("=== CAROUSEL (resize 800px + WebP) ===");
for (const img of CAROUSEL_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  const outputName = img.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const output = path.join(IMAGES_DIR, outputName);

  if (!existsSync(input)) {
    console.log(`⚠️  Não encontrado: ${img}`);
    continue;
  }

  console.log(`\n📷 ${img} (${sizeMB(input)}) → ${outputName}`);
  run(
    `npx sharp-cli -i "${input}" -o "${IMAGES_DIR}" -f webp -q 82 resize 800`
  );

  if (existsSync(output)) {
    console.log(`✅ ${outputName} (${sizeMB(output)})`);
  }
}

// === 2) Imagens gerais — só WebP qualidade 85 ===
console.log("\n=== GERAIS (WebP qualidade 85) ===");
for (const img of GENERAL_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  const outputName = img.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const output = path.join(IMAGES_DIR, outputName);

  if (!existsSync(input)) {
    console.log(`⚠️  Não encontrado: ${img}`);
    continue;
  }

  // Pular se já existe webp e for menor (já foi convertido)
  if (existsSync(output) && statSync(output).size < statSync(input).size) {
    console.log(`⏭️  ${outputName} já existe e é menor — pulando`);
    continue;
  }

  console.log(`\n📷 ${img} (${sizeMB(input)}) → ${outputName}`);
  run(
    `npx sharp-cli -i "${input}" -o "${IMAGES_DIR}" -f webp -q 85`
  );

  if (existsSync(output)) {
    console.log(`✅ ${outputName} (${sizeMB(output)})`);
  }
}

console.log("\n🎉 Conversão concluída!");
console.log("\n📋 Resumo dos arquivos WebP gerados:");
const allFiles = readdirSync(IMAGES_DIR).filter((f) => f.endsWith(".webp"));
for (const f of allFiles) {
  console.log(`   ${f}: ${sizeMB(path.join(IMAGES_DIR, f))}`);
}
