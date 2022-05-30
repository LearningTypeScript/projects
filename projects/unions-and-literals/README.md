# Unions and Literals

_Learning TypeScript_'s **Unions and Literals** chapter covers union and literal types in TypeScript, along with how its type system can deduce more specific (narrower) types from how our code is structured:

- How union types represent values that could be one of two or more types
- Explicitly indicating union types with type annotations
- How type narrowing reduces the possible types of a value
- The difference between `const` variables with literal types and `let` variables with primitive types
- The "billion-dollar mistake" and how TypeScript handles strict null checking
- Using explicit `| undefined` to represent values that might not exist
- Implicit `| undefined` for unassigned variables
- Using type aliases to save typing long type unions repeatedly
