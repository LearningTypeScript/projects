import { criticizePerson } from "./criticizePerson.solution";
import { Person } from "./Person.solution";

// Refactor here! ✨

function createPerson(name: string, quote: string): Person {
	return { name, quote, type: "person" };
}

const examplePeople = [
	createPerson("archeologist", "insert archeologist quote"),
	createPerson("historian", "insert historian quote"),
	createPerson("programmer", "#shipit"),
];

function describePerson(person: Person) {
	const { name, type, quote } = person;

	return `The ${name} ${type} goes: ${quote}!`;
}

export function announceExamplePeople() {
	for (const person of examplePeople) {
		console.log(describePerson(person));

		criticizePerson(person);
	}
}
