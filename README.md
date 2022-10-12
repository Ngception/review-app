# Review Detail Challenge

A React application that lists reviews and allows a user to select a review to see more details. Review data is provided in the form of a `reviews.json` file.

## Prerequisites

This project uses Node.js version >=16.10 and Yarn package manager.

- https://nodejs.org/en/download/
- https://yarnpkg.com/getting-started/install

## Setup

Install dependencies:

```
  yarn install
```

Make a local `.env` file by copying `.env.local` and follow directions to set variables:

```
  cp .env.local .env
```

Start app:

```
  yarn start
```

## Testing

To run Jest unit tests:

```
  yarn test
```

To run Cypress e2e tests, make sure to run `yarn start` first and then:

```
  yarn test-e2e
```

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
