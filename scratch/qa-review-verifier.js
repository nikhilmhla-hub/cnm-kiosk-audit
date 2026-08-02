const fs = require('fs');
const path = require('path');

console.log("=== BILINGUAL QA REVIEW VERIFIER ===");

// Load data/questions.ts
const questionsTs = fs.readFileSync(path.join(__dirname, '../data/questions.ts'), 'utf8');

// 1. Verify exact count of 20 questions
const questionsMatches = questionsTs.match(/id:\s*"q\d+"/g);
console.log(`✓ Questions reviewed: ${questionsMatches ? questionsMatches.length : 0} (Target: 20)`);

// 2. Verify textHi field for every question
const textHiCount = (questionsTs.match(/textHi:/g) || []).length;
console.log(`✓ Questions with Hindi translation (textHi): ${textHiCount} / 20`);

// 3. Verify labelHi field for every option
const labelHiCount = (questionsTs.match(/labelHi:/g) || []).length;
console.log(`✓ Answer options with Hindi translation (labelHi): ${labelHiCount} / 81`);

// 4. Verify scope enforcement in other files
const auditPageTsx = fs.readFileSync(path.join(__dirname, '../app/audit/page.tsx'), 'utf8');
const homePageTsx = fs.readFileSync(path.join(__dirname, '../app/page.tsx'), 'utf8');
const stepIndicatorTsx = fs.readFileSync(path.join(__dirname, '../components/ui/step-indicator.tsx'), 'utf8');

const auditPageHindiButtons = auditPageTsx.includes('आगे बढ़ें') || auditPageTsx.includes('वापस') || auditPageTsx.includes('रद्द करें');
const homePageHindi = homePageTsx.includes('कियोस्क') || homePageTsx.includes('इंजन');
const stepIndicatorHindi = stepIndicatorTsx.includes('चरण') || stepIndicatorTsx.includes('पूरा हुआ');

console.log(`✓ Home Page English-Only: ${!homePageHindi ? "CONFIRMED" : "FAILED"}`);
console.log(`✓ Navigation Buttons & Flow English-Only: ${!auditPageHindiButtons ? "CONFIRMED" : "FAILED"}`);
console.log(`✓ Step Indicator Progress English-Only: ${!stepIndicatorHindi ? "CONFIRMED" : "FAILED"}`);

if (questionsMatches.length === 20 && textHiCount === 20 && labelHiCount === 81 && !homePageHindi && !auditPageHindiButtons && !stepIndicatorHindi) {
  console.log("\nALL QA VERIFICATION CHECKS PASSED SUCCESSFULLY!");
} else {
  console.error("\nQA VERIFICATION FAILED!");
  process.exit(1);
}
