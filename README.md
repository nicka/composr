![composr-plus-bandlab](client/assets/composr-bandlab.png)

# Composr

Composr, lets you record and compose songs socially. Collaborate with musicians from all over the world.


### Prerequisites

For node module management, Composr uses [Yarn](https://yarnpkg.com/) over NPM.

To install yarn globally on your machine please check [Installing Yarn](https://yarnpkg.com/en/docs/install#mac-tab).

# Quick Start

1. Setup project

>This is a convenience method to install a pre-made Serverless Service locally by downloading the Github repo and unzipping it. Services are listed below.

```bash
serverless install -u https://github.com/nicka/composr-react
```

2. Install development dependencies

```bash
yarn
```

# React

## Start locally

```bash
yarn start
```

## Build

Create development build artifacts.

```bash
yarn run build
```

Create production build artifacts.

```bash
yarn run build:prod
```

## Deploy

Deploy build artifacts.

```bash
STAGE="dev" yarn run sls:client:deploy
```

# Test

For testing Composr uses [Jest](https://facebook.github.io/jest/), for more information please check their [documentation](https://facebook.github.io/jest/#getting-started).

>NOTE: To update Jest snapshots supply ` -- -u` to any of the test commands.

**Running the tests**

```bash
yarn run test
```

**Code coverage**

In order to inspect code coverage:

```bash
open coverage/lcov-report/index.html
```
