import { Reverse } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<[], Reverse<[]>>();

expectTypeExtends<[number], Reverse<[number]>>();

expectTypeExtends<[1, number], Reverse<[number, 1]>>();

expectTypeExtends<["b", string, "a"], Reverse<["a", string, "b"]>>();

expectTypeExtends<string[], Reverse<string[]>>();

expectTypeExtends<(number | string)[], Reverse<(number | string)[]>>();

expectTypeExtends<[["a", ["b"]], number], Reverse<[number, ["a", ["b"]]]>>();
