# Step 3: Split On

Recursive template literal types can result in types other than other template literal types too.
For instance, they can be used to process an input template literal type into some other format, such as an array.

## Specification

Write a `SplitOn` type that takes in two type parameters:

1. `Text`: original text; must be a `string`
2. `On`: substring to be replaced; must be a `string`

It should result in an array of template literal types, similar to how strings' `.split` splits a string.

### Examples

- `SplitOn<"", "">` -> `[""]`
- `SplitOn<"baby", "a">` -> `["b", "by"]`
- `SplitOn<"hello my baby", " ">` -> `["hello", "my", "baby"]`

## Files

- `index.ts`: Write your `SplitOn` type here
- `index.test.ts`: Tests verifying your type
- `solution.ts`: Solution code
