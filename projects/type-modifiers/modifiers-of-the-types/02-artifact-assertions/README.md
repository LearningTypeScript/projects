# Step 2: Artifact Assertions

Great job, my fearless friend!
We now understand the plots of the evil forces and are prepared to do battle.
Our next reconnaissance mission is to understand the mystical artifacts left in our lands by the ancients.

See the `artifacts` variable already written for you.
You must give us both an `ArtifactName` type describing the names of those object, and a `getArtifactType` function that takes in a name and returns one of the four possible types.

## Specification

Export an `ArtifactName` type equivalent to a union of the literal keys of `artifacts`.

Export an `getArtifactType` function with a single parameter of that `ArtifactName` type.
It should return the `type` property of the corresponding artifact.
Its return type should be a union of the four possible string literals.

## Files

- `index.ts`: Write your `ArtifactName` and `getArtifactType` here
- `index.test.ts`: Tests verifying `ArtifactName` and `getArtifactType`
- `solution.ts`: Solution code
