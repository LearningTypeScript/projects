import { Zip } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<[], Zip<[], []>>();

expectTypeExtends<[number], Zip<[number], []>>();

expectTypeExtends<[number, string], Zip<[number], [string]>>();

expectTypeExtends<[string], Zip<[], [string]>>();

expectTypeExtends<["a", 1, 2, 3], Zip<["a"], [1, 2, 3]>>();

expectTypeExtends<["a", 1, "b", 2, 3], Zip<["a", "b"], [1, 2, 3]>>();

expectTypeExtends<["a", 1, "b", 2, "c", 3], Zip<["a", "b", "c"], [1, 2, 3]>>();

expectTypeExtends<
	["a", 1, "b", 2, "c", 3, "d"],
	Zip<["a", "b", "c", "d"], [1, 2, 3]>
>();

expectTypeExtends<
	["a", 1, "b", 2, "c", 3, "d", "e"],
	Zip<["a", "b", "c", "d", "e"], [1, 2, 3]>
>();
