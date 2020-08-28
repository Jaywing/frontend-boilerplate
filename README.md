# README

---

## Basic Usage

##### Install Node.js

Make sure you have unsintalled any pre-existing Node.js installations before installing NVM.
**Mac**: Use Homebrew to install NVM
**Windows**: Download NVM from https://github.com/coreybutler/nvm-windows.

Once NVM is installed, open your preffered terminal and run the following to install Node.js 12.x:

```
nvm install 12.x
```

Then activate node 12.x

```
nvm use 12.x
```

#### Install yarn & gulp globally

```
npm install yarn gulp -g
```

#### Install node modules

```
yarn
```

#### Run local server for static HTML and watch for changes

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
