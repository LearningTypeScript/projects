import { schemesInOrder } from "./poetry.solution";

export function verifyProse(prose: string[]) {
	return schemesInOrder.find((scheme) => scheme.verify(prose))?.name;
}
