export type Reverse<T extends any[]> = T extends [infer First, ...infer Rest]
	? [...Reverse<Rest>, First]
	: T;
