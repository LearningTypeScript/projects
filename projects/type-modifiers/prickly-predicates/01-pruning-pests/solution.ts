export const cropFamilies = {
	cactus: "Cactaceae",
	cassava: "Euphorbiaceae",
	chia: "Lamiaceae",
};

export function isCropName(name: string): name is keyof typeof cropFamilies {
	return name in cropFamilies;
}
