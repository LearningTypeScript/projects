# Step 1: Flat Filter

_Learning TypeScript_ introduced a generic `ArrayItemsRecursive` type that retrieves the nested elements from any input array type.
It works by using an inferred conditional type to check if the input is an array, and recursing if so:

```ts
type ArrayItemsRecursive<T> = T extends (infer Item)[]
	? ArrayItemsRecursive<Item>
	: T;

// Type: string
type String2DItem = ArrayItemsRecursive<string[][]>;
```

Another trick you can do with generic type parameters is using `extends` to check if the parameter matches some other type.
For example, this `

## Specification

Write a `FilteredArrayItems` type that takes in two type parameters:

1. `T`
2. `Filter`

It should result in a flattened array or tuple type of items that only `extend Filter`.

## Examples

- `FilteredArrayItems<number[], string>` -> `number`
- `FilteredArrayItems<(number | string)[], number>` -> `number`
- `FilteredArrayItems<["a", 1, "b", 2], string>` -> `"a" | "b"`

## Files

- `index.ts`:
- `solution.ts`: Solution code
