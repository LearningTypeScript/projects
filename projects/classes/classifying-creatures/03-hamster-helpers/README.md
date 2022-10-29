# Step 3: Hamster Helpers

Oh my!
You're doing so wonderfully!
Really, props to you!
I've got just the one last favor to ask of you.

We've got a hefty set of small furry pets here.
Specifically, gerbils and hamsters.
Cute, ain't they?

We'd like to represent their behavior with classes in TypeScript.
But we're finding it a bit hard to wrap our heads around type system keywords for classes.

Can you write an abstract `SmallFurryPet` class for us, with a `Gerbil` class and a `Hamster` class both extending it?

## Specification

There should be four exports in your file:

- `SmallPetFood`: A union type of string literals: `bugs`, `fruits`, `insects`, `plants`, `seeds`, and `vegetables`
- `SmallFurryPet`: An abstract class with...
  - Properties:
    - `species`: A readonly string set in its constructor using a single constructor parameter
    - `happiness`: A protected property initial set to `0`
  - Methods:
    - `eats`: An abstract property that takes in a `food` parameter of type `SmallPetFood`, and returns a boolean indicating whether that species eats that type of food
    - `isHappy`: returns whether the `happiness` property is greater than `0`
- `Gerbil`: A class that extends `SmallFurryPet` with methods:
  - Constructor: provide the species `"Gerbil"`
  - `dig`: A method that increases happiness by `1`
  - `eats`: returns whether the food is one of: `insects`, `plants`, `seeds` or `vegetables`
- `Hamster`: A class that extends `SmallFurryPet` with methods:
  - Constructor: provide the species `"Hamster"`
  - `run`: A method that increases happiness by `1`
  - `eats`: returns `true`, always

## Files

- `index.ts`: Write your types and classes here
- `index.test.ts`: Tests verifying the classes
- `solution.ts`: Solution code
