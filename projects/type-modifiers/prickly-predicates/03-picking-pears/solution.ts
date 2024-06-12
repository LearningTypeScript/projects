export type Cactus = DormantCactus | FloweringCactus | FruitBearingCactus;

export interface DormantCactus {
	picked: boolean;
	state: "dormant";
}

export interface FloweringCactus {
	flowers: "small" | "medium" | "large";
	state: "flowering";
}

export interface FruitBearingCactus {
	fruits: number;
	state: "fruit-bearing";
}

export function isFruitBearingCactus(
	cactus: Cactus
): cactus is FruitBearingCactus {
	return cactus.state === "fruit-bearing";
}

export function pickFruitBearingCacti(cacti: Cactus[]) {
	return cacti.filter(isFruitBearingCactus);
}
