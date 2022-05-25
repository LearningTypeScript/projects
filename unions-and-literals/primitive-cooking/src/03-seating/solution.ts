const headOfTable = "Me!";
let adjacentLeft: "Chuckie" | "Tommy";
let adjacentRight: "Chuckie" | "Tommy";
let furtherLeft: "Angelica" | "Susie" | undefined;
let furtherRight: "Susie" | "Kimi" | "Edwin" | undefined;

// I always invite Chuckie and Tommy! ♥
if (Math.random() > 0.5) {
	adjacentLeft = "Chuckie";
	adjacentRight = "Tommy";
} else {
	adjacentLeft = "Tommy";
	adjacentRight = "Chuckie";
}

// I invite Angelica about half of the time. We're not as close as Chuckie and Tommy. It's a long story.
// I try to fill `furtherLeft` first...
if (Math.random() > 0.5) {
	furtherLeft = "Angelica";
}

// Same with Susie. I like them, but do I *really* like hanging out with them? Only sometimes.
// ...then after that `furtherRight`
if (Math.random() > 0.5) {
	if (furtherLeft) {
		furtherRight = "Susie";
	} else {
		furtherLeft = "Susie";
	}
}

// If I invited Angelica but not Susie, I'll invite Kimi. They get along well with Angelica but not Susie.
if (furtherLeft === "Angelica" && furtherRight !== "Susie") {
	furtherRight = "Kimi";
}

// If I invited Susie but not Angelica, I'll invite Edwin. They get along well with Susie but not Angelica.
if (furtherLeft === "Susie") {
	furtherRight = "Edwin";
}

console.log(`At the head of the table is... ${headOfTable}`);

console.log(`Adjacent to the left is: ${adjacentLeft}`);
console.log(`Adjacent to the right is: ${adjacentRight}`);

console.log(`Further down on the left is: ${adjacentLeft ?? "nobody"}`);
console.log(`Further down on the right is: ${adjacentRight ?? "nobody"}`);

export {};
