# Step 2: Plant Particulars

Well, I'll be darned!
You blew through that first step faster than a dog chasing a roadrunner.
Hee-yah!

Our second request of you is to deal with is weeding.
We're sick and tired of these invasive weeds in our dadgum farm!
They're just about as welcome as a rattlesnake at a square dance.

Can you help us write a function that filters data to just a known crop we want to grow?
That'd be mighty useful in helping us skedaddle out those worrisome weeds.

## Specification

Export a type predicate function named `isAnyCrop` that takes in data of type `unknown`.
It should return whether the data is an object that matches the existing `AnyCrop` interface.

> Tip: when a value is type `object`, TypeScript won't allow you to access a property unless you check first that the property's key is `in` the value:
>
> ```ts
> function checkValue(value: unknown) {
> 	if (!!value && typeof value === "object" && "key" in value) {
> 		console.log(value.key);
> 	}
> }
> ```

## Files

- `index.ts`: Write your `isAnyCrop` function here
- `index.test.ts`: Tests verifying `isAnyCrop`
- `solution.ts`: Solution code

## Notes

- The function's return type should be an explicit type predicate with the `is` keyword
