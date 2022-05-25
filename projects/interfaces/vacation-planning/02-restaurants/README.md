# Step 2: Restaurants

Amazing!
Wonderful!
Our travel agents can rest easy knowing we can describe cities to them using the function and object types you wrote.
You did it!

Now that we can describe cities, people are going to flock to visit them.
And those people are going to be hungry -- they'll need restaurant recommendations.

The problem is we have just one big list of restaurants with their city.
We don't know how to group those restaurants together by city.

Please write a `groupRestaurants` function for us.
It should take in an array of objects describing restaurants, then return an object containing arrays of landmark name strings, grouped by their city name.

## Specification

Parameters:

1. `restaurants`: An array of objects containing `city` and `name` strings

Return:

Example: Given the following array as input...

```js
[
	{ city: "Troy", name: "Muddaddy Flats" },
	{ city: "Albany", name: "Bombers" },
	{ city: "Troy", name: "Nighthalks" },
];
```

...the function would output the following object:

```js
{
  Troy: ["Muddaddy Flats", "Nighthalks"],
  Albany: ["Bombers"],
}
```

## Files

- `index.ts`: Write your `groupRestaurants` function here
- `index.test.ts`: Tests verifying `groupRestaurants`
- `solution.ts`: Solution code
