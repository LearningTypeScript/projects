function announceMachines(announce) {
	var label;
	var labelsCount = 0;

	for (var i = 1; i < arguments.length; i += 1) {
		const machine = arguments[i];

		if (machine.label) {
			label = machine.label;
			labelsCount += 1;
		} else {
			label = "Make: " + machine.make + "; Model: " + machine.model;
		}

		announce(label);
	}

	return labelsCount;
}

module.exports.announceMachines = announceMachines;
