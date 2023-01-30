# The Narrow Trail

> A [Learning TypeScript > Unions and Literals](https://learning-typescript.com/unions-and-literals) 🍲 entree project.

Greetings, wilderness pioneers.
You've come to most traitorous part of your journey west: the Narrow Trail.
This legendary path winds takes a week to cross but is notoriously difficult to bring supplies on.
Choose your actions on the trail wisely -- or perish.

...or at least, that's the marketing material for our in-development video game.
This project will have you implementing a game function in TypeScript to help us get to our first demo.
We'd do it ourselves, except we need someone who's learned about how unions, literals, and type narrowing work in TypeScript.
That's you!

Oh, and one more catch: don't use the `string` primitive type.
Use string literals instead wherever reasonable.
We want our types to be exact.
You can still use `number` if you want for numeric values.

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

Take a look at `./src/index.ts`.
It contains a `runCommands()` function you'll be working within.

> Don't worry if you haven't covered functions in TypeScript yet.
> This project doesn't require knowing about how TypeScript works with them.

The game logic you're to write will keep track of four pieces of state:

- _Available Resource_: Which of _Food_ or _Water_ will be available to resupply (see later), initially without a value
- _Day_: What day of travel it is, initially 1
- _Food_: A numeric value for how much food the player has left, initially 5
- _Water_: A numeric value for how much water the player has left, initially 5

The goal of the game is for the player to still have both _Food_ and _Water_ after _Day_ passes 7.

Your logic will continuously generate a random number between 1 and 6 to simulate a dice roll for a new day.
Each day, one of the following commands will happen based on that rolled number:

- 1, **Food**: Subsequent **Resupply** rolls will increase the player's _Food_ supplies
- 2, **Water**: Subsequent **Resupply** rolls will increase the player's _Water_ supplies
- 3-6, **Resupply**:
  - If no _Available Resource_ value is set: set _Available Resource_ to _Food_ if the rolled number is even or _Water_ if the rolled number is odd
  - If an _Available Resource_ value is set: increase the corresponding resource by the rolled number, then unset the _Available Resource_ value.

After the dice roll actions are completed, decrease both `food` and `water` by 1.
If either is `0` then `return false`.

Once the _Day_ state passes 7 (the player has lasted 7 days with sufficient supplies), `return true`.

### Examples

Here's a step-by-step example of a player losing the game:

<table>
<thead>
<tr>
<th>Day</th>
<th>Roll</th>
<th>Change</th>
<th>New Food State</th>
<th>New Water State</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>3</td>
<td><em>Available Resource</em> is now <em>Water</em></td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>2</td>
<td>4</td>
<td>Increase <em>Water</em> by 4</td>
<td>3</td>
<td>7</td>
</tr>
<tr>
<td>3</td>
<td>4</td>
<td><em>Available Resource</em> is now <em>Food</em></td>
<td>2</td>
<td>6</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td><em>Available Resource</em> is (still) <em>Food</em></td>
<td>1</td>
<td>5</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td><em>Available Resource</em> is now <em>Water</em></td>
<td>0 💀</td>
<td>4</td>
</tr>
</tbody>
</table>

Here's a step-by-step example of a player winning the game:

<table>
<thead>
<tr>
<th>Day</th>
<th>Roll</th>
<th>Change</th>
<th>New Food State</th>
<th>New Water State</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td><em>Available Resource</em> is now <em>Food</em></td>
<td>4</td>
<td>4</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>Increase <em>Food</em> by 3</td>
<td>6</td>
<td>3</td>
</tr>
<tr>
<td>3</td>
<td>5</td>
<td><em>Available Resource</em> is now <em>Water</em></td>
<td>5</td>
<td>2</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td><em>Available Resource</em> is (still) <em>Water</em></td>
<td>4</td>
<td>1</td>
</tr>
<tr>
<td>5</td>
<td>4</td>
<td>Increase <em>Water</em> by 4</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>6</td>
<td>6</td>
<td><em>Available Resource</em> is now <em>Food</em></td>
<td>2</td>
<td>3</td>
</tr>
<tr>
<td>7</td>
<td>1</td>
<td><em>Available Resource</em> is (still) <em>Food</em></td>
<td>1</td>
<td>2</td>
</tr>
</tbody>
</table>

## Notes

- Everything you write should be within the `runCommands` function.
- You don't need to create any new arrays, functions or objects.
