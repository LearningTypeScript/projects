export type FilteredArrayItems<T, Filter> = T extends (infer Item)[]
	? Item extends Filter
		? FilteredArrayItems<Item, Filter>
		: never
	: T extends Filter
	? T
	: never;
