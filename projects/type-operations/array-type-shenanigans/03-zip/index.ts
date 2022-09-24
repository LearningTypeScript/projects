export type Zip<T extends any[], U extends any[]> = T extends [
	infer FirstT,
	...infer RestT
]
	? U extends [infer FirstU, ...infer RestU]
		? [FirstT, FirstU, ...Zip<RestT, RestU>]
		: [...T]
	: U;
