export type SplitOn<
	Text extends string,
	On extends string,
	Results extends string[] = [],
> = Text extends `${infer Prefix}${On}${infer Suffix}`
	? SplitOn<Suffix, On, [...Results, Prefix]>
	: [...Results, Text];

type Wat1 = SplitOn<"baby", "a">;
//   ^?

type Wat2 = SplitOn<"hello my baby", " ">;
//   ^?
