# Star Wars Character List Test Task
Reqs:  Using a third-party API as a data source (for example: Star Wars API https://swapi.dev/), implement a React and Typescript SPA application consisting of two pages.
On the main page display a list or character cards, add pagination to the list.
On the main page should be implemented search or filtration of characters (depending on the selected API).
Implement a page with detailed information on the selected character.
Pros:
Neat layout.
Use of UI framework (Material, Ant, Bootstrap, etc.
And u need to do:
- Use the Redux repository to work with data
- Edit character information locally, without sending it to the server
- Tests

### Demo
Repo is automatically deployed on [Vercel](https://sw-explorer.vercel.app/)

### Installation
```
yarn
```

### Running development server
```
yarn dev
```

### Running tests
For unit tests run
```
yarn test:unit
```
For e2e tests run, you have to first run dev server first
```
yarn dev
yarn test:e2e
```

### Core features
- Homepage with character list and search functionality
- Character preview page with edit functionality

### Tech Stack
- Next.JS with redux as a store, Chakra UI for components
- Jest for unit and e2e tests, puppeteer for browser automation
- Husky for pre-commit hooks, to check ts errors, eslint, and tests
