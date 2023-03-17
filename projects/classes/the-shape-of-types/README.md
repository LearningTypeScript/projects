# The Shape of Types

> A [Learning TypeScript > Classes](https://learning-typescript.com/classes) 🍲 entree project.

Hark!
Listen!
The eternal deathly scrapings of a thousand locked doors rattling from unseen forces.
Back.
Forth.
Back.
Forth.

An unspeakable horror consumes all.
It is here, and it is _hungry_.

To understand this ancient evil, we must implement it using TypeScript classes.
Only then shall we have the clarity to send our sorcerers into battle against it.

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

The first class you must export from the file must be named `Horror`.
It will contain...

- Property:
  - `name`: An abstract read-only string only visible to the class and its derived classes
- Public Methods:
  - `doBattle`: Takes in an opponent `Horror`, and if this horror's `.getPower()` is greater than or equal to the opponent's, consumes the opponent _(read more later)_.
  - `getPower`: Returns the sum of calling `this.getPowerFrom` on each previously consumed opponent _(read more later)_, plus the number of previously consumed opponents
- Protected Abstract methods:
  - `getPowerFrom`: Takes in a previously consumed opponent and returns a computed power number
  - `isEvil`: Returns a boolean

Each previously consumed horror passed to `getPowerFrom` should contain the following properties:

- `evil`: Whether the horror was evil
- `name`: The `name` of the consumed horror
- `power`: The consumed horror's previous power level

Two more exported classes must be exported that each extends `Horror`:

- `Demon`, with:
  - Property:
    - `name`: `"Demon"`
  - Methods:
    - `getPowerFrom`: If the previously consumed horror was evil, returns half its power; otherwise, returns double its power
    - `isEvil`: Returns `true`
- `Sorcerer`, with:
  - Constructor: takes in a `name` to set as the property, and an `evil` boolean
  - Methods:
    - `getPowerFrom`: If the previously consumed horror's `evil` matches this sorcerer's evil, returns double its power; otherwise, returns exactly its power
    - `isEvil`: Returns the `evil` boolean received in the constructor

## Notes

- You may add `#` private members to the classes as you wish, such as to store previously consumed opponents.
