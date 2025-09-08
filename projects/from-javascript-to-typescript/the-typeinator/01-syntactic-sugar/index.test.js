const { announceMachines } = require("./index");

test("announceMachines returns correct count", () => {
	const messages = [];

	const result = announceMachines(
		(msg) => messages.push(msg),
		{ make: "Honda", model: "Civic" },
		{ make: "Toyota", model: "Corolla", label: "Compact Car" },
		{ make: "Ford", model: "Focus", label: "Eco Car" },
	);

	expect(result).toBe(2);
	expect(messages).toEqual([
		"Make: Honda Model: Civic",
		"Compact Car",
		"Eco Car",
	]);
});
