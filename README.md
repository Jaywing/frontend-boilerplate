# README

---

## Basic Usage

##### Install NodeJS

Make sure you have unsintalled any pre-existing Node.js installations before installing NVM.
**Mac**: Use Homebrew to install NVM
**Windows**: Download NVM from https://github.com/coreybutler/nvm-windows.

Once NVM is installed, open your preffered terminal and run the following to install NodeJS:

```
nvm install 16.x
```

Then activate node 16.x

```
nvm use 16.x
```

#### Install yarn & gulp globally

```
npm install yarn gulp -g
```

#### Install node modules

```
yarn
```

#### Run local server to build static HTML files and watch for changes

```
yarn start
```

#### Run local proxy server and watch for changes

```
yarn start --proxy
```

#### Build static HTML pages and prouduction assets

```
yarn build
```

#### Build proxy production assets

```
yarn build --proxy
```

#### VS Code Extensions

Nunjucks Formatter: https://marketplace.visualstudio.com/items?itemName=okitavera.vscode-nunjucks-formatter
Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
