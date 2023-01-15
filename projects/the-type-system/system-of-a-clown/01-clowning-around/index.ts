let remainingGuests = 20;

while (true) {
	// Each group of guests will be size 5-10
	const guestsToAssign = Math.floor(Math.random() * 5) + 5;
	let activity; // Those were some nice type annotations you had here!
	let capacity; // It'd be a shame if we ... *erased* them! 😈
	let requiresSupplies;

	switch (Math.floor(Math.random() * 5)) {
		case 0:
			activity = "balloon animals";
			capacity = 5;
			requiresSupplies = true;
			break;
		case 1:
			activity = "face painting";
			capacity = "1";
			requiresSupplies = true;
			break;
		case 2:
			activity = "juggling";
			capacity = 3;
			requiresSupplies = true;
			break;
		default:
			activity = "dancing";
			capacity = 10;
			break;
	}

	console.log(`${guestsToAssign} of us will enjoy ${activity}.`);

	for (let i = 0; i < guestsToAssign; i += capacity) {
		console.log(`\t${capacity} will enter the ${activity} activity.`);
	}

	remainingGuests -= guestsToAssign;
	if (remainingGuests < 0) {
		break;
	}

	console.log(`We have ${remainingGuests} remaining guests to entertain.\n`);
}

console.log("\nAll done!");

export {};
