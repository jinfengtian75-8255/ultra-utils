const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The file has multiple 'export const translations' or messy sections.
// I will extract the Schema and then the best version of each locale.

const schemaStart = content.indexOf('export interface TranslationSchema');
const schemaEnd = content.indexOf('export const translations');

const schema = content.substring(schemaStart, schemaEnd);

// I will now rebuild the translations object from the last (most updated) version of each language.
// Actually, it's safer to use the structure I just synchronized in the latter part of the file.

const finalStart = content.lastIndexOf('export const translations');
let finalObject = content.substring(finalStart);

// Clean up any double definitions and assemble the final file.
const finalContent = `export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'es' | 'de' | 'pl';

${schema}
${finalObject}`;

fs.writeFileSync(filePath, finalContent);
console.log('Cleaned up duplicates and consolidated translations into a single source.');
