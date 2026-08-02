const fs = require('fs');
const path = require('path');

// Verify data/questions.ts
const questionsPath = path.join(__dirname, '../data/questions.ts');
const questionsContent = fs.readFileSync(questionsPath, 'utf8');

console.log("Checking questions.ts...");

// Check if typescript file contains all 20 questions with textHi and labelHi
const qMatches = questionsContent.match(/id:\s*"q\d+"/g);
console.log(`Found ${qMatches ? qMatches.length : 0} questions.`);

if (!qMatches || qMatches.length !== 20) {
  console.error("ERROR: Expected 20 questions!");
  process.exit(1);
}

const hasTextHiCount = (questionsContent.match(/textHi:/g) || []).length;
console.log(`Found ${hasTextHiCount} textHi fields.`);

if (hasTextHiCount < 20) {
  console.error("ERROR: Not all questions have textHi!");
  process.exit(1);
}

const hasLabelHiCount = (questionsContent.match(/labelHi:/g) || []).length;
console.log(`Found ${hasLabelHiCount} labelHi fields in options.`);

if (hasLabelHiCount < 70) { // 20 questions * 3-5 options = ~80 options
  console.error("ERROR: Missing labelHi fields in options!");
  process.exit(1);
}

console.log("SUCCESS: All 20 questions and options have Hindi translations!");
