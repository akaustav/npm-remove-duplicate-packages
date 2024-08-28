import packageConfig from '../input/package.json' with { type: 'json' };
import { writeJSONFile } from './helpers.js';

const { dependencies, devDependencies } = packageConfig;

try {
  const prodPackages = Object.keys(dependencies);

  for (const packageName of prodPackages) {
    delete packageConfig.devDependencies[packageName];
  }
} catch (error) {
  console.error(error);

  if (dependencies == null) {
    console.error('No `dependencies` found in input package.json');
  }

  if (devDependencies == null) {
    console.error('No `devDependencies` found in input package.json');
  }
}

const packageConfigJSON = JSON.stringify(packageConfig, null, 2);

writeJSONFile(packageConfigJSON);

console.log('done');
