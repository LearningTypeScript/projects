# Step 2: Word Replace

SpOnGeCaSiNg a word is fun, but not likely to be useful in any real project.
Being able to replace text akin to strings' `.replaceAll` is a little more useful.

## Specification

Write a `WordReplace` type that takes in three type parameters:

1. `Text`: original text; must be a `string`
2. `Original`: substring to be replaced; must be a `string`
3. `Replacement`: new values to replace `Original`; must be a `string`

It should result in a version of the original `Text` where all instances of `Original` are replaced with `Replacement.

### Examples

- `WordReplace<"", "", "">` -> `""`
- `WordReplace<"apple", "p", "!">` -> `"a!!le"`
- `WordReplace<"banana!", "na", "NA">` -> `"baNANA!"`

## Files

- `index.ts`: Write your `WordReplace` type here
- `index.test.ts`: Tests verifying your type
- `solution.ts`: Solution code
