import { FilteredArrayItems } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<never, FilteredArrayItems<[], string>>();

expectTypeExtends<never, FilteredArrayItems<number, string>>();

expectTypeExtends<never, FilteredArrayItems<number[], string>>();

expectTypeExtends<number, FilteredArrayItems<(number | string)[], number>>();

expectTypeExtends<"a", FilteredArrayItems<["a"], string>>();

expectTypeExtends<string, FilteredArrayItems<["a", string], string>>();

expectTypeExtends<never, FilteredArrayItems<[1], string>>();

expectTypeExtends<never, FilteredArrayItems<[1, number], string>>();

expectTypeExtends<"a", FilteredArrayItems<[1, "a", 2, number], string>>();

expectTypeExtends<number, FilteredArrayItems<[1, "a", 2, number], number>>();

expectTypeExtends<"a", FilteredArrayItems<[1, "a", 2, 3], string>>();

expectTypeExtends<1 | 2 | 3, FilteredArrayItems<[1, "a", 2, 3], number>>();
