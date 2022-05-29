const { checkEmotion, speak } = process.env.TEST_SOLUTIONS
	? require("./solution")
	: require("./index");

const simulateSetTimeoutResolve = async (time) => {
	jest.advanceTimersByTime(time);

	// Wait for a seemingly larger than needed number of resolves,
	// just in case the code does more async/await than it needs...
	await Promise.resolve();
	await Promise.resolve();
	await Promise.resolve();
};

describe(checkEmotion, () => {
	it("does not process the emotion before a second", async () => {
		const knownEmotions = new Set();
		let result;
		checkEmotion(knownEmotions, "joy").then(
			(hasEmotion) => (result = hasEmotion)
		);

		await simulateSetTimeoutResolve(999);

		expect(result).toBe(undefined);
	});

	it("processes a missing emotion as false after a second", async () => {
		const knownEmotions = new Set();
		let result;
		checkEmotion(knownEmotions, "joy").then(
			(hasEmotion) => (result = hasEmotion)
		);

		await simulateSetTimeoutResolve(1000);

		expect(result).toBe(false);
	});

	it("processes a known emotion as true after a second", async () => {
		const knownEmotions = new Set(["joy"]);
		let result;
		checkEmotion(knownEmotions, "joy").then(
			(hasEmotion) => (result = hasEmotion)
		);

		await simulateSetTimeoutResolve(1000);

		expect(result).toBe(true);
	});
});

describe(speak, () => {
	it("rejects if the emotion is not known", async () => {
		const knownEmotions = new Set([]);

		const result = speak(knownEmotions, "joy", "");

		await simulateSetTimeoutResolve(1000);

		return expect(result).rejects.toThrow(
			new Error(`Does not compute. I do not understand joy.`)
		);
	});

	it("returns the phrase and emotion if the emotion is known", async () => {
		const knownEmotions = new Set(["joy"]);

		const result = speak(knownEmotions, "joy", "Hello, world!");

		await simulateSetTimeoutResolve(1000);

		return expect(result).resolves.toEqual(`"Hello, world!" (joy)`);
	});
});
