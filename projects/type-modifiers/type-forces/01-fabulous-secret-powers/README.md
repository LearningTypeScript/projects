# Step 1: Fabulous Secret Powers

We must first understand who will do battle, with what powers, and on what side.
Our magics have obtained a `./characters.ts` file that contains descriptions of the main characters in this battle.
We must convert these raw data strings into well-typed TypeScript code.

## Specification

Export a function named `announceCharacter` that takes in the raw character text as a string.
It should parse the text with `JSON.parse`, log the character's attributes, and return the well-typed character.

Logs should be in the format:

```plaintext
I am He-Man.
My powers are: agility, durability, speed, strength, transformation.
I am good.
```

## Files

- `index.ts`: Write your `announceCharacter` function here
- `index.test.ts`: Tests verifying `announceCharacter`
- `solution.ts`: Solution code

## Notes

- The function's return type should not be `any` or `unknown`.
