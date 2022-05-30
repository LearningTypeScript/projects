export type Case = {
	court: "state" | "federal";
	decided: Date;
	defendant: string;
	id: string | string[];
	plaintiff: string;
	title: string;
};

export const cases: Case[] = [
	{
		court: "federal",
		decided: new Date("February 18, 1986"),
		defendant: ["Glynn Batson", "and", "Southplains Land Corporation"],
		id: 841710,
		plaintiff: "United States of America",
		title: "United States v. Batson",
	},
	{
		court: "state",
		decided: "April 17, 1992",
		defendant: "Bradford Marine, Inc",
		id: ["90-6372-CIV", "90-6599-CIV"],
		plaintiff: "Lyn C. Noble",
		title: "Noble v. Bradford Marine, Inc",
	},
	{
		amusing: true,
		court: "NY state",
		defendant: "PepsiCo, Inc.",
		decided: {
			on: new Date("August 5, 1999"),
		},
		ids: ["96-cv-5320", "96-cv-9069"],
		plaintiff: "John Leonard",
		title: "Leonard v. Pepsico, Inc.",
	},
];
