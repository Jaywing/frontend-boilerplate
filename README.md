# README

---

## Basic Usage

##### Install NVM (If you haven't already)

Make sure you have unsintalled any pre-existing Node.js installations before installing NVM.
**Mac**: Use Homebrew to install NVM
**Windows**: Download NVM from https://github.com/coreybutler/nvm-windows.

NVM will detect the required node version for this project from the nvmrc file

#### Install gulp globally

```
pnpm install gulp -g
```

#### Install node modules

```
pnpm install
```

#### Run local server to build static HTML files and watch for changes

```
npm start
```

#### Run local proxy server and watch for changes

```
npm start --proxy
```

#### Build static HTML pages and prouduction assets

```
npm build
```

#### Build proxy production assets

```
npm build --proxy
```

#### VS Code Extensions

Nunjucks Formatter: https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter
Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
Tailwind Intellisense: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
