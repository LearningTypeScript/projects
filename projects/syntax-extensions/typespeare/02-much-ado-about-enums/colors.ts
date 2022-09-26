export const Colors = {
	Blue: "blue",
	Red: "red",
	Yellow: "yellow",
} as const;

export type Color = typeof Colors[keyof typeof Colors];
