// Declare your types here! ✨

export interface Act {
	performer: string;
	name: string;
	sections: Section[];
}

export type Section = Illusion | Trick;

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

export interface VolunteerIllusion extends Illusion {
	duration: number;
	title: string;
}

export interface Trick {
	gimmick: string;
}

export function isTrick(section: Section): section is Trick;

export function isVolunteerIllusion(
	illusion: Illusion
): illusion is VolunteerIllusion;

export interface GetAudienceMemberSettings {
	duration: number;
	title: string;
}

export interface AudienceMember {
	name: string;
	willing: boolean;
}

export function getAudienceMemberFor(
	settings: GetAudienceMemberSettings
): Promise<AudienceMember>;
