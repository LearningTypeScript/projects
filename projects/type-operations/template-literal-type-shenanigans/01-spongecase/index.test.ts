import { SpOnGeCaSe } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<"", SpOnGeCaSe<"">>();
expectTypeExtends<"A", SpOnGeCaSe<"a">>();
expectTypeExtends<"AbC", SpOnGeCaSe<"abc">>();
expectTypeExtends<"AbCdEf", SpOnGeCaSe<"abcdef">>();
expectTypeExtends<"AbC DeF", SpOnGeCaSe<"abc def">>();
