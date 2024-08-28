import fs from 'node:fs/promises';

export async function writeJSONFile(content) {
  try {
    await fs.writeFile('output/package.output.json', content);
  } catch (err) {
    console.log(err);
  }
}
