const fs = require('fs');
let c = fs.readFileSync('src/lib/translations.ts', 'utf8');

c = c.replace(/        imageRestorer: \{\},/g, "        imageRestorer: '',");
c = c.replace(/        revenueCalc: \{\},/g, "        revenueCalc: '',");
c = c.replace(/        screenRecorder: \{\},/g, "        screenRecorder: '',");
c = c.replace(/        megaMenu: \{\},/g, "        megaMenu: '',");
c = c.replace(/        allTools: \{\},/g, "        allTools: '',");

fs.writeFileSync('src/lib/translations.ts', c);
