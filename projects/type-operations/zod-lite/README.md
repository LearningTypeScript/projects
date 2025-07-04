# Zod Lite

> A [Learning TypeScript > Type Operations](https://learning-typescript.com/type-operations) 🍲 entree project.

Kneel before Zod!

General Zod of the Kryptonian Army demands your assistance in creating a [Zod](https://zod.dev)-like schema validation library.
It must support strings, literal strings, unions of literal strings, and objects with properties that can be any of the above.
Only in this way will the former glory of the Kryptonian Army be restored.

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

Given this code:

```ts
import * as z from "./index";

const spySchema = z.object({
	disguise: z.string(),
	trueName: z.literal("Kal-El"),
	role: z.union([z.literal("hero"), z.literal("reporter")]),
});

type Spy = z.Infer<typeof spySchema>;
```

The `Spy` type should be equivalent to:

```ts
type Spy = {
	disguise: string;
	trueName: "Kal-El";
	role: "hero" | "reporter";
};
```

If you are not familiar with the glory of General Zod or the [Zod schema library](https://zod.dev) named after him, you can read the [Zod basics documentation](https://zod.dev/basics) to learn more about how it works.
