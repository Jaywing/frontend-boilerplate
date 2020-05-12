# README

---

## Basic Usage

##### Install Node.js

Make sure you have unsintalled any pre-existing Node.js installations before installing NVM.
**Mac**: Use Homebrew to install NVM
**Windows**: Download NVM from https://github.com/coreybutler/nvm-windows.

Once NVM is installed, open your preffered terminal and run the following to install Node.js 12.16.3:

```
nvm install 12.16.3
```

Then activate node 12.16.3

```
nvm use 12.16.3
```

#### Install node modules

```
yarn
```

#### Run local server for PROXY and watch for changes

```
yarn start
```

#### Run local server for STATIC HTML and watch for changes

```
yarn start --static
```

#### Build production assets

```
yarn build
```

#### Build static HTML pages and proudction assets

```
yarn build --static
```
