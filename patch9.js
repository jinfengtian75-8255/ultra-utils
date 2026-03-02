const fs = require('fs');
let c = fs.readFileSync('src/lib/translations.ts', 'utf8');

c = c.replace(/            imageRestorer: \{[\s\S]*?        \},/g, "            imageRestorer: 'Image Restorer',");
c = c.replace(/            screenRecorder: \{[\s\S]*?        \},/g, "            screenRecorder: 'Screen Recorder',");
c = c.replace(/            revenueCalc: \{[\s\S]*?        \},/g, "            revenueCalc: 'Revenue Calc',");
c = c.replace(/            megaMenu: \{[\s\S]*?        \},/g, "            megaMenu: 'All Utilities',");
c = c.replace(/            allTools: '모든 도구',/g, "            allTools: 'All Tools',");

fs.writeFileSync('src/lib/translations.ts', c);
