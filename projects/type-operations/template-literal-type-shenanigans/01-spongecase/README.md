# Step 1: Sponge Case

_SpOnGeCaSe_ is a text casing based on the [Mocking Spongebob meme](https://knowyourmeme.com/memes/mocking-spongebob).
It involves alternating lowercase and uppercase characters in a string, and is a natural fit for recursive template literal types!

Generic template literal types are able to be made recursive in a similar way to how other types may be made recursive.
They may take in a type parameter and use the `infer` keyword in a conditional check.
Conditional checks may check whether the type parameter matches a more specific template literal type.

For example, this `AddBangs` type adds a `!` after every character by checking whether the `T` type parameter consists of a single character, `Prefix`, before any length string, `Suffix`:

```ts
type AddBangs<T> = T extends `${infer Prefix}${infer Suffix}`
	? `${Prefix}!${AddBangs<Suffix>}`
	: T;

// Type: "H!e!l!l!o!,! !w!o!r!l!d!!!"
type Message = AddBangs<"Hello, world!">;
```

## Specification

Write a `SpOnGeCaSe` type that takes in two type parameters:

1. `Text`
2. `FirstTransform`: either `"upper"` or `"lower"`; by default, `"upper"`

It should result in the `SpOnGeCaSe` equivalent of the string.

### Examples

- `SpOnGeCaSe<"">` -> `""`
- `SpOnGeCaSe<"abc def">` -> `"AbC DeF"`
- `SpOnGeCaSe<"hello", "lower">` -> `"hElLo"`

## Files

- `index.ts`: Write your `SpOnGeCaSe` type here
- `index.test.ts`: Tests verifying your type
- `solution.ts`: Solution code
