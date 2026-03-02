import * as fs from 'fs';

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

const tscOutput = fs.readFileSync('tsc_output_utf8.txt', 'utf8');
const extractLineNums = (str, pattern) => {
    const regex = new RegExp(pattern, 'g');
    let match;
    const lines = [];
    while ((match = regex.exec(str)) !== null) {
        lines.push(parseInt(match[1]));
    }
    return lines;
};

// "An object literal cannot have multiple properties with the same name." points to duplicate properties within bgRemover.
// In patch3.js, I replaced `roughLasso: ""` with ALL the bgRemover keys, but `patch.ts` executed earlier already added them but only once. I must have run a regex that duplicated them.
// Let's just run an intelligent formatter/TS transformer to strip duplicates, or simpler: just string replace the specific duplicate block from all langs.

const duplicateBlock = `
            smartTrim: "",
            smartClick: "",
            clickPrompt: "",
            lassoPrompt: "",
            aiThinking: "",
            panView: "",
            smoothStream: "",
            brush: "",
            selection: "",
            smartExtract: "",
            fontGothic: "",
            fontSerif: "",
            fontMono: "",
            fontHandwriting: "",
            fontDefault: "",`;

content = content.replace(new RegExp(duplicateBlock, 'g'), '');
fs.writeFileSync('src/lib/translations.ts', content);

