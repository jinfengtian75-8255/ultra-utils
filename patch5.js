const fs = require('fs');

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

// I accidentally stripped all the missing properties in my patch4.js, rather than keeping one copy.
// Let's add them back to bgRemover in ALL languages carefully.
const regex = /roughLasso: "",/g;
content = content.replace(regex, `roughLasso: "",
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
            fontDefault: "",`);

fs.writeFileSync('src/lib/translations.ts', content);
