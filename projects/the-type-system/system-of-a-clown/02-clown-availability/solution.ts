// Note: I'm planning on inviting 20 guests in total.
// Some clowns can only handle a certain number of guests.
let guestCount = 20;
let clownsCount = 0;

let krustyAvailability = true;
let ronaldAvailability = true;
let pennywiseAvailability = true;

let matchingsDescription = "";
let lastClown;

do {
	clownsCount += 1;

	// Krusty says: I had a one-man show on Broadway...
	// That's who showed up, one man!
	if (krustyAvailability) {
		guestCount -= 10;
		krustyAvailability = false;
		matchingsDescription += "Krusty will handle the first ten guests.\n";
		lastClown = "Krusty";
		continue;
	}

	// Ronald says: McDonald's donated a large set of computers to a school...
	// They were all Big Macs!
	if (ronaldAvailability) {
		guestCount -= 5;
		ronaldAvailability = false;
		matchingsDescription += "Ronald will handle the next five guests.\n";
		lastClown = "Ronald";
		continue;
	}

	// Pennywise asks: What's a sewer's favorite data type?
	// Pennywise answers: Floats!
	if (pennywiseAvailability) {
		pennywiseAvailability = false;
		matchingsDescription += "Pennywise w̺̞̠i̢͇͙l͇̞l͇͍̘ c͓͕̝o̡̠̞n̼̝s̡̞͎u͉̝͔m͚̪̞e̢͚̝ y̴̡̡͕͌̿́ó̸̢͇͚̾̕u̸̡̡͎͒͛.";
		lastClown = "Pennywise";
		continue;
	}

	throw new Error(`Oh no! We're out of clowns!`);
} while (guestCount > 0);

if (clownsCount > 2) {
	console.log("We've got a lot of clowns coming!");
}

if (matchingsDescription.length) {
	console.log(`There will be ${clownsCount} clowns!\n`);
	console.log(matchingsDescription); // Haha!
	console.log(`The last clown is: ${lastClown.toUpperCase()}!`);
} else {
	console.log("Nobody gets a clown. Terrible party. Goodbye.");
}

export {};
