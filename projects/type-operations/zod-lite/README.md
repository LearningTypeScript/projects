# Zod Lite

> A [Learning TypeScript > Type Operations](https://learning-typescript.com/type-operations) 🍲 entree project.

Kneel before Zod!

## Setup

In one terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

In another terminal, run Jest via the `test` script.
For example, to start tests in watch mode:

```shell
npm run test -- --watch
```

## Specification

Create and export the following functions from `src/index.ts`:

- `string()`: creates a schema object representing any primitive string
- `literal<Value>(value)`: creates a schema object of a literal string value
- `union<Values>(values)`: creates a schema object representing multiple allowed type constituents
- `object<Properties>(properties)`: creates a schema object representing an object

Additionally, export an `type Infer<Schema>` that creates a TypeScript type for a schema.

## Example

This code:

```ts
import * as z from "./index";

const spySchema = z.object({
	disguise: z.string(),
	moniker: z.literal("007"),
	plan: z.union([z.literal("active"), z.literal("improvising")]),
});

type Spy = z.Infer<typeof spySchema>;
```

...create a `Spy` type equivalent to:

```ts
type Spy = {
	disguise: string;
	moniker: "007";
	plan: "active" | "improvising";
};
```
