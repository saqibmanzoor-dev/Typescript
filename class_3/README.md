# TypeScript Class 3

This project is a small TypeScript practice project. It shows how TypeScript helps us describe data clearly and catch mistakes before the code runs.

## What this project teaches

- `type` defines the shape of an object, such as a user with a name, age, and email.
- `Map` stores values using keys and lets us get a value by its key.
- Union types limit a value to a fixed set of choices, such as event names.
- `Exclude` creates a new union type by removing an option from another union.
- Type inference lets TypeScript understand many types automatically from the values in the code.

## Project structure

- `src/index.ts` contains the TypeScript examples.
- `dist/` contains compiled output when the project is built.
- `tsconfig.json` contains the TypeScript compiler settings.

## Run the project

Install dependencies, compile the TypeScript, and run the generated JavaScript:

```bash
npm install
npx tsc
node dist/index.js
```
