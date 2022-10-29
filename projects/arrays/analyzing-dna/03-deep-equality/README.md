# Step 3: Deep Equality

You're doing great work, scientist!
The lab is impressed with the accuracy and speed of your functions.
We'd like to continue to use your functions on more DNA analyses.

Next up, we'd like you to write a `deepEquality` function that takes in two arrays of string arrays.
Each of those two arrays is themselves an array of DNA sequences (remember, a DNA sequence is represented by an array of strings).
The function should return a boolean indicating whether the two arrays contain the same list of DNA sequences.

Note that we're still looking at value equality here, not referential.
Two lists of DNA sequences are equal only if all the strings are equal.

## Specification

Parameters:

1. `a`: An array of arrays of strings
2. `b`: An array of arrays of strings

Return: A boolean indicating whether `a` and `b` contain the same string arrays.

## Files

- `index.ts`: Write your `deepEquality` function here
- `index.test.ts`: Tests verifying `deepEquality`
- `solution.ts`: Solution code
