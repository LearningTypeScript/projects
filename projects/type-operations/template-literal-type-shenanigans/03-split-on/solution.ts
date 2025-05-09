export type SplitOn<
	Text extends string,
	On extends string,
	Results extends string[] = [],
> = Text extends `${infer Prefix}${On}${infer Suffix}`
	? SplitOn<Suffix, On, [...Results, Prefix]>
	: [...Results, Text];
