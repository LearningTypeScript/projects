import { WordReplace } from "~/index";

function expectTypeExtends<T, U extends T>() {}

expectTypeExtends<"a", WordReplace<"a", "b", "c">>();
expectTypeExtends<"b", WordReplace<"a", "a", "b">>();
expectTypeExtends<"bb", WordReplace<"aa", "a", "b">>();
expectTypeExtends<"bbbb", WordReplace<"abab", "a", "b">>();
expectTypeExtends<"bbccbb", WordReplace<"abccba", "a", "b">>();
expectTypeExtends<"dbccbd", WordReplace<"abccba", "a", "d">>();
expectTypeExtends<"abcdbbccda", WordReplace<"abcaabbccaaa", "aa", "d">>();
