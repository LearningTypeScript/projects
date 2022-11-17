function checkEmotion(knownEmotions, emotion, callback) {
	// Simulate database processing time by waiting a second...
	setTimeout(() => {
		callback(knownEmotions.has(emotion));
	}, 1000);
}

function speak(knownEmotions, newEmotion, phrase, callback) {
	checkEmotion(knownEmotions, newEmotion, (hasEmotion) => {
		if (hasEmotion) {
			callback(`"${phrase}" (${newEmotion})`);
		} else {
			callback(
				undefined,
				new Error(`Does not compute. I do not understand ${newEmotion}.`)
			);
		}
	});
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
