# Step 2: Dog Displays

Great job presenting those parrot properties!
Really, spectacular work!
You've earned yourself another assignment!

We've got a whole litter of rescued puppies to put up for adoption.
These furry little balls of energy are hard to keep track of!
Could you please write us a `Puppy` class that we can use internally and a `PuppyInTheWindow` interface to present to our friends?

## Specification

Export a `PuppyInTheWindow` interface with three read-only properties:

- `colors`: An array of strings representing the color of the dog
- `furriness`: A number indicating how furry the little fellow is
- `owner`: Either a string or undefined

Additionally export a `Puppy` class that implements the `PuppyInTheWindow` interface.
Its properties should not be read-only; in addition, it should have the following methods:

- Constructor: takes in initial values for `colors` and `furriness` (`owner` starts off undefined)
- `adopt`: Takes a new `owner` string as a parameter and sets it as the `owner` property

## Files

- `index.ts`: Write your `Puppy` class and `PuppyInTheWindow` interface here
- `index.test.ts`: Tests verifying `Puppy`
- `solution.ts`: Solution code
