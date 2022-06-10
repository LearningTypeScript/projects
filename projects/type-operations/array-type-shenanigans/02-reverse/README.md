# Step 2: Reverse

Next up, let's have you start writing your own conditional types from scratch.
You'll be working with `...` spread and rest operations, which conditional types are able to use on types known to be array types.
You can enforce that a type parameter is an array type by giving it an array constraint like `extends any[]`.

This `ArrayLength` type ensures `T` is some kind of array, so `T` is guaranteed to have a `length` property:

```ts
type ArrayLength<T extends any[]> = T["length"];

// Type: number
type LengthOfStringArray = ArrayLength<string[]>;

// Type: 3
type LengthOfTupleTrio = ArrayLength<["a", "b", "c"]>;
```

Spreads on array types allow types to _combine_ array types.
For example, this `Unshift` type adds an item `Item` to the beginning of the `Rest` array:

```ts
type Unshift<Rest extends any[], Item> = [Item, ...Rest];

// Type: ["First!", "a", "b", "c"]
type PrefixFirst = Unshift<["a", "b", "c"], "First!">;
```

Rests on array types allow types to _extract_ from array types.
For example, this `Pop` type ignores the first element in the array type retrieves the rest as `Rest`:

```ts
type Pop<T extends any[]> = T extends [any, ...infer Rest] ? Rest : never;

// Type: ["b", "c"]
type PopFirst = Pop<["a", "b", "c"]>;
```

Your task for this step is to use both concepts to create a recursive `Reverse` type.
`Reverse` should take in an array as a type parameter `T` and return an array that consists of:

1. The first element in `T`
2. ...a rest of the result of `Reverse` on the remaining elements of `T`

> Fans of functional programming may recognize this as a very functional way of reversing a list!

## Specification

Write a `Reverse` type that takes in one type parameter that must be an array: `T`.

It should result in a reversed array or tuple type of `T`'s elements.

## Examples

- `Reverse<number[]>` -> `number[]`
- `Reverse<(number | string)[]>` -> `(number | string)[]` (which may also be written as `(string | number)[]`)
- `Reverse<['a', 'b', 'c']>` -> `['c', 'b', 'a']`

## Files

- `index.ts`: Write your `Reverse` type here
- `solution.ts`: Solution code
