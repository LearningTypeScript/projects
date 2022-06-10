export type SpOnGeCaSe<
	Text,
	FirstTransform extends "upper" | "lower" = "upper"
> = Text extends `${infer First}${infer Rest}`
	? FirstTransform extends "upper"
		? `${Capitalize<First>}${SpOnGeCaSe<Rest, "lower">}`
		: `${Lowercase<First>}${SpOnGeCaSe<Rest, "upper">}`
	: ``;
