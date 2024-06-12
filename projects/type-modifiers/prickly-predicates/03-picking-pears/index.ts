export type Cactus = DefaultCactus | FloweringCactus | FruitBearingCactus;

export interface FloweringCactus {
	flowers: "small" | "medium" | "large";
	state: "flowering";
}

export interface FruitBearingCactus {
	fruits: number;
	state: "fruit-bearing";
}

export interface DefaultCactus {
	picked: boolean;
	state: "default";
}

// Write your isFruitBearingCactus and pickFruitBearingCacti functions here! ✨
// You'll need to export it so the tests can run it.
