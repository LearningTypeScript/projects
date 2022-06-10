import { SplitOn } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<["a"], SplitOn<"a", "b">>();
expectTypeExtends<["b", "b"], SplitOn<"bab", "a">>();
expectTypeExtends<["bb", "", "bb"], SplitOn<"bbaabb", "a">>();
expectTypeExtends<["bb", "bb"], SplitOn<"bbaabb", "aa">>();
expectTypeExtends<["", "b", "b", ""], SplitOn<"ababa", "a">>();
