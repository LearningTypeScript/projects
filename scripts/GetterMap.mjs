export class GetterMap {
	#map = new Map();
	#getter;

	constructor(getter) {
		this.#getter = getter;
	}

	get(key) {
		const cached = this.#map.get(key);
		if (cached !== undefined) {
			return cached;
		}

		const checked = this.#getter(key);

		this.#map.set(key, checked);

		return checked;
	}
}
