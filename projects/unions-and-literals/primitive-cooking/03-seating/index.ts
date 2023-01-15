// Please fill in any missing type annotations here...
const headOfTable = "Me!";
let adjacentLeft;
let adjacentRight;
let furtherLeft;
let furtherRight;

// I always invite Susie and Tommy! ♥
if (Math.random() > 0.5) {
	adjacentLeft = "Susie";
	adjacentRight = "Tommy";
} else {
	adjacentLeft = "Tommy";
	adjacentRight = "Susie";
}

// I invite Angelica about half of the time. We're not as close as Susie and Tommy. It's a long story.
// I try to fill `furtherLeft` first...
if (Math.random() > 0.5) {
	furtherLeft = "Angelica";
}

// Same with Chuckie. I like them, but do I *really* like hanging out with them? Only sometimes.
// ...then after that `furtherRight`
if (Math.random() > 0.5) {
	if (furtherLeft) {
		furtherRight = "Chuckie";
	} else {
		furtherLeft = "Chuckie";
	}
}

// If I invited Angelica but not Chuckie, I'll invite Kimi. They get along well with Angelica but not Chuckie.
if (furtherLeft === "Angelica" && furtherRight !== "Chuckie") {
	furtherRight = "Kimi";
}

// If I invited Chuckie but not Angelica, I'll invite Timmy. They get along well with Chuckie but not Angelica.
if (furtherLeft === "Chuckie") {
	furtherRight = "Timmy";
}

console.log(`At the head of the table is... ${headOfTable}`);

console.log(`Adjacent to the left is: ${adjacentLeft}`);
console.log(`Adjacent to the right is: ${adjacentRight}`);

console.log(`Further down on the left is: ${adjacentLeft ?? "nobody"}`);
console.log(`Further down on the right is: ${adjacentRight ?? "nobody"}`);

export {};
