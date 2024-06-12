export interface AnyCrop {
	growth: number;
	harvested: boolean;
	name: "cactus" | "cassava" | "chia";
}

export function isAnyCrop(data: unknown): data is AnyCrop {
	return (
		!!data &&
		typeof data === "object" &&
		"growth" in data &&
		typeof data.growth === "number" &&
		"harvested" in data &&
		typeof data.harvested === "boolean" &&
		"name" in data &&
		typeof data.name === "string" &&
		["cactus", "cassava", "chia"].includes(data.name)
	);
}
