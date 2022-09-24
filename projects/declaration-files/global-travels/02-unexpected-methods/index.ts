// Write your types here! ✨

declare global {
	interface Array<T> {
		smoosh(): string;
		unsmoosh(): string[];
	}

	interface String {
		alternating(): [string, string];
	}
}

export function logMessage(): string {
	const encodedMessage =
		"wjheiwcehljearv'assfcarvioprtiptrei?msitt-irvienigssa!";

	const alternating = encodedMessage.alternating();
	const [question, answer] = alternating.unsmoosh();

	console.log(question);
	console.log(` - ${answer}`);

	return [question, answer].smoosh();
}
