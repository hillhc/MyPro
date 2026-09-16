const fs = require('node:fs');
const path = require('node:path');

// Some editors save UTF-8 with a BOM, which CRA treats as a lint error in CI.
// Remove only that optional prefix; preserve every other byte in source files.
function removeByteOrderMarks(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      removeByteOrderMarks(file);
    } else if (entry.isFile() && /\.(?:[cm]?jsx?|tsx?|css|json)$/i.test(entry.name)) {
      const contents = fs.readFileSync(file);
      if (contents[0] === 0xef && contents[1] === 0xbb && contents[2] === 0xbf) {
        fs.writeFileSync(file, contents.subarray(3));
        console.log(`Removed UTF-8 BOM: ${path.relative(process.cwd(), file)}`);
      }
    }
  }
}

removeByteOrderMarks(path.resolve(__dirname, '../src'));
