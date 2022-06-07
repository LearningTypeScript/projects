# Step 1: Encoded Outputs

First thing we'll need is a proper set of JavaScript files and such.
We've already got a working `index.ts` file.
But we need `.d.ts`, `.d.ts.map`, `.js`, and `.js.map` files along with it.

It should include the `index.ts` file and any other source files we'd eventually want to add.
Make sure the `index.verify.ts` file isn't compiled though.
Just non-`*.verify.ts` files.

Can you set up the TSConfig file like that?

## Files

- `index.ts`: Existing source code
- `tsconfig.json`: Set up your configuration options here
- `solution.test.ts`: Tests verifying your configuration options
- `tsconfig.solution.json`: Solution configuration options

## Notes

- Don't modify any source code. Only change `tsconfig.json`.
