# Step 3: Pick

Enough of these generic array functions.
Let's move onto objects.

The first object function you'll need to write is `pick`.
It takes in an object and a string key, then returns the object's member under that key.

## Specification

Parameters:

1. `container`: A container
2. `key`: One of the keys of the container

Return: The container's member under that key

Example: `pick({ a: 1, b: 2 }, 'a')` -> `1`

## Files

- `index.ts`: Write your `pick` function here
- `index.test.ts`: Tests verifying `pick`
- `solution.ts`: Solution code
