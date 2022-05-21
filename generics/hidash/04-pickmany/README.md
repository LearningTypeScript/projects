# Step 4: Pick Many

It occurs to you that as a universe-hopping time traveler, you can make this reality's version of "Hidash" include whatever functions you want.
Whoa.

You always wanted a version of `pick` that takes in an array of keys and returns a corresponding array of values.
Let's call it `pickMany`.

## Specification

Parameters:

1. `container`: A container
2. `keys`: Any number of the keys of the container

Return: The container's members under those keys, in that order.

Example: `pickMany({ a: 1, b: 2, c: 3 }, ['a', 'c'])` -> `[1, 3]`

## Files

- `index.ts`: Write your `pick` function here
- `index.test.ts`: Tests verifying `pick`
- `solution.ts`: Solution code
