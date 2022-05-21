# Step 1: Cities

Upstate New York features a plethora of cities of various sizes for visitors to enjoy.
We'd like to have a `describeCity` function that can take in an object describing a city and return a multiline string description of that city.
City objects will always contain the following properties:

- `coordinates`: An object containing `north` and `west` tuple arrays of three numbers.
- `name`: The name of the city, such as `"Albany"`.

They may also optionally include a `catchphrase` string containing a cute quote from the city.

We'll need this function to be well-typed in taking in that city object.
No `any` types here, please!

The returned description will have the following lines, in order:

1. The name of the city, followed by `, New York`
2. `* ` and its catchphrase wrapped in `"` quotes, if one was provided
3. `* Located at` and its location in `00°00'00"N 00°00'00"W` format

## Specification

Parameters:

1. `city`: A city object

Return: A string describing the city

Example: Given the following object as input...

```js
{
  catchphrase: "Uncle Sam was here.",
  coordinates: {
    north: [42, 43, 54],
    west: [73, 41, 33],
  },
  name: "Troy",
}
```

...the function would output the following string:

```plaintext
Troy, New York
* "Uncle Sam was here."
* Located at 42°43'54"N 73°41'33"W
```

## Files

- `index.ts`: Write your `describeCity` function here
- `index.test.ts`: Tests verifying `describeCity`
- `solution.ts`: Solution code
