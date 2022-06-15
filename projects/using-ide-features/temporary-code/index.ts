// Refactor here! ✨

function tempCreatePersonTodoRefactorSoon(name: string, quote: string) {
	return { name, quote, type: "person" };
}

const examplePeople = [
	tempCreatePersonTodoRefactorSoon("archeologist", "insert archeologist quote"),
	tempCreatePersonTodoRefactorSoon("historian", "insert historian quote"),
	tempCreatePersonTodoRefactorSoon("programmer", "#shipit"),
];

function describePerson(person) {
	const { name, type, quote } = person;

	return "The " + name + " " + type + " goes: " + quote + "!";
}

export function announceExamplePeople() {
	for (const person of examplePeople) {
		console.log(describePerson(person));

		if (person.quote.indexOf("#") !== -1) {
			console.log(`\t${person.name} should stop going on Twitter so much...`);
		}
	}
}
