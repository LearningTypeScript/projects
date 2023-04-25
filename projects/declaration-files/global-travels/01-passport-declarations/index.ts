// Write your types here! ✨

declare global {
	interface Window {
		passports: Passports;
	}
}

interface Passports {
	[i: string]: Passport | undefined;
}

interface Passport {
	expires: Date;
	name: string;
}

export function checkPassport(id: string) {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: `Passport for ${passport.name} has expired.`,
		};
	}

	return {
		allowed: true,
	};
}
