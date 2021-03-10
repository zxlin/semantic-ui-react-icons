const path = require('path');
const fs = require('fs');

const { ALL_ICONS_IN_ALL_CONTEXTS } = require('semantic-ui-react/dist/commonjs/lib/SUI');

const iconCSS = fs.readFileSync(path.join(__dirname, '../node_modules/fomantic-ui/dist/components/icon.css'), 'utf-8');

const existingIcons = new Set(ALL_ICONS_IN_ALL_CONTEXTS);
const totalExistingIcons = existingIcons.size;
const matches = iconCSS.matchAll(/i\.icon\.([\w\.]+):before {/g);

const newIcons = [];
for (const match of matches) {
  const selector = match[1];
  const className = selector.replace(/\./g, ' ');
  if (!existingIcons.has(className)) {
    newIcons.push(className);
    existingIcons.add(className);
  }
}

fs.writeFileSync(path.join(__dirname, '../new_icons.json'), JSON.stringify(newIcons.sort(), null, 2));

console.log(`Existing Icons: ${totalExistingIcons} | New Icons: ${newIcons.length}`);
