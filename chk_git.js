const { execSync } = require('child_process');
const fs = require('fs');
let out = '';
const commits = execSync('git log -20 --oneline').toString('utf8').split('\n').filter(Boolean);
for (const l of commits) {
    const hash = l.split(' ')[0];
    try {
        const c = execSync('git show ' + hash + ':src/lib/translations.ts').toString('utf8');
        out += hash + ' -> size: ' + c.length + ', ko: ' + (c.match(/ko: \\{/g) || []).length + ', megaMenu: ' + (c.match(/megaMenu/g) || []).length + '\n';
    } catch (e) {
        out += hash + ' -> Error\n';
    }
}
fs.writeFileSync('git_translations_stats.txt', out, 'utf8');
