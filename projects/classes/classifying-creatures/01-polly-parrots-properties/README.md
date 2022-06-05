# Step 1: Polly Parrot's Properties

Our first specimen is a beauty!
A 49-year-old blue-and-yellow macaw hailing from central Brazil.
Wow!

The parrot's name is Polly, and Polly says a lot of things.
We're pretty sure Polly picks up new phrases regularly.

Can you write a `Parrot` class for us with the capability to speak?

## Specification

Create and export a new `Parrot` class.
It should have two `#` private members:

- `#name`: A name string given as the only parameter of its constructor
- `#phrases`: An array of known phrases, initially consisting of just a string in the format `"#name wants a cracker!"` (e.g. `"Polly wants a cracker!"`)

It should have three methods:

- `announce`: Returns a string in the format `"Squawk! I'm #name!"` (e.g. `"Squawk! I'm Polly!"`)
- `learn`: Takes in a string and adds it to the internal `#phrases` member
- `speak`: Returns a random phrase from the internal `#phrases` member

## Files

- `index.ts`: Write your `Parrot` class here
- `index.test.ts`: Tests verifying `Parrot`
- `solution.ts`: Solution code
