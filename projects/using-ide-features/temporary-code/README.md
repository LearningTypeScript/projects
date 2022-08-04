# Temporary Code

> A [Learning TypeScript > Using IDE Features](https://learning-typescript.com/using-ide-features) 🍲 entree project.

Have you ever written code meant only to be temporary?
Did you say something hopeful like _"we'll clean this up after release"_ before committing it?

Well, I did.
And now the "temporary" code is a core part of my record-keeping program that shouldn't change.
The irony is not lost on me, thank you very much.

I'd like you to perform several refactors on the code in `./index.ts` to help us modernize the old code.
Each of these should correspond to a refactor provided by TypeScript.

1. Rename the `tempCreatePersonTodoRefactorSoon` function to `createPerson`
2. Add an explicit inline return type to the function
3. Extract that return type to an interface named `Person`
4. Infer the type for the `describePerson` function's `person` parameter
5. Move the `Person` type to a new file, `src/Person.ts`
6. Convert the `describePerson` function's string concatenation to a template literal string
7. Select the `announceExamplePeople` function's entire `if` statement -including its contents- and extract it to a function in module scope named `criticizePerson`
8. Move the `criticizePerson` function to a new file, `src/criticizePerson.ts`

> In life, there are but three certainties: death, taxes, and temporary code.
> -Josh Goldberg, 2022

## Setup

In your terminal, run the TypeScript compiler via the `tsc` script.
For example, to start the TypeScript compiler in watch mode:

```shell
npm run tsc -- --watch
```

## Files

- `src/index.ts`: Refactor the functions here
- `src/index.test.ts`: Tests verifying the refactored functions
- `src/index.solution.ts`, `./src/criticizePerson.solution.ts`, and `./src/Person.solution.ts`: Solution code

## Notes

- Don't directly write any code. You should be able to complete this entire project using only refactors provided by TypeScript.
  - Other than any shortcuts you choose to use, the only typing you should perform on your keyboard should be selecting names in refactor prompts.
