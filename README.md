# npm-remove-duplicate-packages

This utility removes duplicate packages from the `devDependencies` object in the `package.json` file of a Node.js project.

## Usage

To use:

1. Clone this repository.
1. Switch to Node.js as mentioned in the `.nvmrc` file.
    - This Node.js version is necessary to run the current repository.
    - However, the project can parse `package.json` and `package-lock.json` files generated by `npm` versions `6` through `10` (and maybe higher versions not released yet).
1. Copy the following files from your Node.js projects into the `input` folder:
    1. `package.json`
    1. **Note:** The files in the `input` folder have been ignored from git. So unless you remove the git configuration, you can't accidentally commit these files into this project.
1. Run `npm start` at the root of the project.
1. If everything goes as expected, a `package.output.json` file should have been generated in the `output` folder.
    1. This file can replace your project's `package.json` file.
