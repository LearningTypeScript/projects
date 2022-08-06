import { describe, expect, it, jest } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { createKitchen } = process.env.TEST_SOLUTIONS ? solution : index;

describe(createKitchen, () => {
	describe("announce", () => {
		it("announces the starting state", () => {
			const kitchen = createKitchen(
				123,
				jest.fn<index.Cleaner>(),
				jest.fn<index.Supplier>()
			);

			const result = kitchen.announce();

			expect(result).toBe(
				`I have 0 much dirt, 123 budget, 0 bread(s), 0 fruit(s), 0 sauce(s), and 0 vegetable(s).`
			);
		});
	});

	describe("clean", () => {
		it("sets dirt to the new amount", () => {
			const cleaner = jest.fn(() => 10);
			const kitchen = createKitchen(0, cleaner, jest.fn<index.Supplier>());
			const time = 123;

			kitchen.clean(time);

			expect(cleaner).toHaveBeenCalledWith(0, time);
			expect(kitchen.announce()).toMatch(/I have 10 much dirt/);
		});
	});

	describe("purchase", () => {
		it("returns false without changing stock when expense is greater than budget", () => {
			const kitchen = createKitchen(
				1,
				jest.fn<index.Cleaner>(),
				jest.fn<index.Supplier>()
			);

			const result = kitchen.purchase(2);

			expect(result).toBe(false);
			expect(kitchen.announce()).toBe(
				"I have 0 much dirt, 1 budget, 0 bread(s), 0 fruit(s), 0 sauce(s), and 0 vegetable(s)."
			);
		});

		it("returns true and changes stock when expense is greater than budget", () => {
			const supplier = jest.fn((expense: number) => ({
				breads: expense * 1,
				fruits: expense * 2,
				sauces: expense * 3,
				vegetables: expense * 4,
			}));
			const kitchen = createKitchen(5, jest.fn<index.Cleaner>(), supplier);

			const result = kitchen.purchase(3);

			expect(result).toBe(true);
			expect(kitchen.announce()).toBe(
				"I have 0 much dirt, 2 budget, 3 bread(s), 6 fruit(s), 9 sauce(s), and 12 vegetable(s)."
			);
		});

		it("returns false without changing stock when expense is less than budget on a second call", () => {
			const supplier = jest.fn((expense: number) => ({
				breads: expense * 1,
				fruits: expense * 2,
				sauces: expense * 3,
				vegetables: expense * 4,
			}));
			const kitchen = createKitchen(5, jest.fn<index.Cleaner>(), supplier);
			kitchen.purchase(3);

			const result = kitchen.purchase(3);

			expect(result).toBe(false);
			expect(kitchen.announce()).toBe(
				"I have 0 much dirt, 2 budget, 3 bread(s), 6 fruit(s), 9 sauce(s), and 12 vegetable(s)."
			);
		});

		it("returns false without changing stock when expense is less than budget on a second call", () => {
			const supplier = jest.fn((expense: number) => ({
				breads: expense * 1,
				fruits: expense * 2,
				sauces: expense * 3,
				vegetables: expense * 4,
			}));
			const kitchen = createKitchen(5, jest.fn<index.Cleaner>(), supplier);

			kitchen.purchase(3);
			const result = kitchen.purchase(2);

			expect(result).toBe(true);
			expect(kitchen.announce()).toBe(
				"I have 0 much dirt, 0 budget, 5 bread(s), 10 fruit(s), 15 sauce(s), and 20 vegetable(s)."
			);
		});
	});

	describe("prepare", () => {
		it("returns true and decreases stock when dirt is below 100 and the recipe succeeds", () => {
			const kitchen = createKitchen(
				0,
				jest.fn<index.Cleaner>(),
				jest.fn<index.Supplier>()
			);
			const recipe = jest.fn(() => ({
				newStock: {
					breads: 1,
					fruits: 2,
					sauces: 3,
					vegetables: 4,
				},
				succeeded: true,
			}));

			const result = kitchen.prepare(recipe);

			expect(recipe).toHaveBeenCalledWith({
				breads: 0,
				fruits: 0,
				sauces: 0,
				vegetables: 0,
			});
			expect(result).toBe(true);
			expect(kitchen.announce()).toBe(
				"I have 1 much dirt, 0 budget, 1 bread(s), 2 fruit(s), 3 sauce(s), and 4 vegetable(s)."
			);
		});

		it("returns false and does not change stock when dirt is below 100 and the recipe fails", () => {
			const kitchen = createKitchen(
				0,
				jest.fn<index.Cleaner>(),
				jest.fn<index.Supplier>()
			);
			const recipe = jest.fn(() => ({
				newStock: {
					breads: 1,
					fruits: 2,
					sauces: 3,
					vegetables: 4,
				},
				succeeded: false,
			}));

			const result = kitchen.prepare(recipe);

			expect(recipe).toHaveBeenCalledWith({
				breads: 0,
				fruits: 0,
				sauces: 0,
				vegetables: 0,
			});
			expect(result).toBe(false);
			expect(kitchen.announce()).toBe(
				"I have 1 much dirt, 0 budget, 0 bread(s), 0 fruit(s), 0 sauce(s), and 0 vegetable(s)."
			);
		});

		it("returns false and does not call recipe when dirt is 100", () => {
			const kitchen = createKitchen(
				0,
				jest.fn<index.Cleaner>(),
				jest.fn<index.Supplier>()
			);
			const recipe = jest.fn(() => ({
				newStock: {
					breads: 1,
					fruits: 2,
					sauces: 3,
					vegetables: 4,
				},
				succeeded: true,
			}));

			for (let i = 0; i < 100; i += 1) {
				kitchen.prepare(recipe);
			}

			const result = kitchen.prepare(recipe);

			expect(recipe).toHaveBeenCalledTimes(100);
			expect(result).toBe(false);
			expect(kitchen.announce()).toBe(
				"I have 100 much dirt, 0 budget, 1 bread(s), 2 fruit(s), 3 sauce(s), and 4 vegetable(s)."
			);
		});
	});
});
