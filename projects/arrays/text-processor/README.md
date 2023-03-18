# Text Processor

> A [Learning TypeScript > Arrays](https://learning-typescript.com/arrays) 🍲 entree project.
> You'll practice creating and transforming arrays of strings.

Hello, fellow text editing and type setting enthusiast!
I hear you have a dual interest in both TypeScript and and type scripts.
That's great because I have a few projects for you to help me out with all of those things.

I have a collection of raw text strings that represent some of my favorite pieces of literature.
I'd like to set up code that can turn those pieces of text into print-ready lines, each capped at a maximum character width.

Before we can do any of our fancy typography work on text, we need to split text into lines.
Much of our text data is stored in strings where the only whitespace is a single `" "` space between words.

More specifically: I'm going to give you an array of lines - each represented as a string.
For each of those lines, give me back an array of strings (so the final result is an array of array of strings).
Each of the strings in the array has as many of the words from the first line as it can fit, as long as there's a `" "` space between them.

Additionally, for each line, I'll need the ability to align it to the left, middle, or right.
Alignment means adding spaces to the beginning and/or end of the string to fit it to a specified character width.

Can you type this text processor up for me, fellow typography practitioner?

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

In `index.ts`, export an `alignTexts` function.

Parameters:

1. `texts`: An array of strings
2. `options`: An object with the following properties:
   - `align` _(optional)_: Whether to align to the `left` _(default)_, `middle`, or `right`
   - `width`: Maximum character width for each processed line

Return type: An array of array of strings.

### Examples

In this first example, each output string must be 3 characters long.
The first string can fit `"ab"` but can't fit the additional word `"c"` because that would be 4 characters (`"ab c"`).
The second string can git `"c"` and `"d"` with a space between them.

- Input: `alignTexts(["ab c d"], { width: 3 })`
- Output:

  ```json
  [["ab ", "c d"]]
  ```

Here, there are three lines to be split, and each becomes one of the arrays in the output array.
`align: "right"` indicates that spaces must be added before characters (to their left), not after them (to their right).
The first line can only fit one word (first `"ab"`, then `"cd"`) in the allowed 4 spaces.
The second line again can only fit one word in its allowed spaces.
The third line is the only one that can fit two words together: `"a"` and `"bc"`, which together with a space take up 4 characters.

- Input: `alignTexts(["ab cd", "abc def", "a bc def"], { align: "right", width: 4 })`
- Output:

  ```json
  [
  	["  ab", "  cd"],
  	[" abc", " def"],
  	["a bc", " def"]
  ]
  ```

This last example shows aligning text to the middle.
If there's an extra space, it's added to the right (at the end).

- Input: `alignTexts(["a", "ab", "abc", "abcd"], { align: "middle", width: 4 })`
- Output:

  ```json
  [[" a  "], [" ab "], ["abc "], ["abcd"]]
  ```

## Files

- `index.ts`: Add your `alignTexts` function and type annotations here
- `index.test.ts`: Tests verifying your `alignTexts` function and type annotations
- `solution.ts`: Solution code
  - `solution-alternate.ts`: Alternate solution code that uses a more functional approach

## Notes

- `text.split(" ")` is sufficient to split the original text into an array of words.
  - Don't worry about spaces being off: words will only ever be separated by a single `" "` space.
