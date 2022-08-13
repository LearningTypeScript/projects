# Development

Thanks for your interest in developing on _Learning TypeScript_'s projects! 💖

> Be sure to read through [CONTRIBUTING.md](./CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) before contributing.

## Project Structures

Projects mostly have their directory and file structures standardized and verified by tests in `test/file.test.ts`.
Each project should include a `tsconfig.json` in each "step" that extends the root `tsconfig.json` in this repository:

- 🥗 Appetizers should have a TSConfig in their root and in each step
- 🍲 Entrees and 🍰 desserts should have just the TSConfig in their root

### Solutions

Project solutions are stored as `solution.ts` and/or `*.solution.ts` files alongside starting files.
Each project should have two scripts:

- `test`: what learners run to verify their solutions have worked
- `test:solution`: the same as `test`, but running on those `*solution.ts` files

CI tasks verify project solutions:

- [solutions.yml](./workflows/solutions.yml): that `test:solution` passes
- [test.yml](./workflows/test.yml): that replacing original files with solutions passes `npm run test`
- [tsc.yml](./workflows/tsc.yml): that replacing original files with solutions passes `npm run tsc`
