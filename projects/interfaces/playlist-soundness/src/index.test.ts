import { describe, expect, test } from "@jest/globals";

import * as index from "./index";
import * as solution from "./solution";

const { unrollPlaylist } = process.env.TEST_SOLUTIONS ? solution : index;

describe(unrollPlaylist, () => {
	test.each<[solution.PlaylistItem[], unknown]>([
		[[], { artists: {}, songs: [], time: 0 }],
		[
			[{ artist: [], length: 1, name: "", type: "song" }],
			{ artists: {}, songs: [""], time: 1 },
		],
		[
			[
				{
					artist: ["Queen"],
					length: 355,
					name: "Bohemian Rhapsody",
					type: "song",
				},
			],
			{
				artists: { Queen: ["Bohemian Rhapsody"] },
				songs: ["Bohemian Rhapsody"],
				time: 355,
			},
		],
		[
			[
				{
					artist: ["Queen"],
					length: 355,
					name: "Bohemian Rhapsody",
					type: "song",
				},
				{
					artist: ["Blondie"],
					length: 202,
					name: "Heart of Glass",
					type: "song",
				},
			],
			{
				artists: { Blondie: ["Heart of Glass"], Queen: ["Bohemian Rhapsody"] },
				songs: ["Bohemian Rhapsody", "Heart of Glass"],
				time: 557,
			},
		],
		[
			[
				{
					songs: [
						{
							artist: ["Queen"],
							length: 223,
							name: "Death On Two Legs (Dedicated to...)",
							type: "song",
						},
						{
							artist: "Queen",
							length: 68,
							name: "Lazing on a Sunday Afternoon",
							type: "song",
						},
						{
							artist: ["David Bowie", "Queen"],
							length: 248,
							name: "Under Pressure",
							type: "song",
						},
					],
					type: "album",
				},
			],
			{
				artists: {
					"David Bowie": ["Under Pressure"],
					Queen: [
						"Death On Two Legs (Dedicated to...)",
						"Lazing on a Sunday Afternoon",
						"Under Pressure",
					],
				},
				songs: [
					"Death On Two Legs (Dedicated to...)",
					"Lazing on a Sunday Afternoon",
					"Under Pressure",
				],
				time: 539,
			},
		],
		[
			[
				{
					songs: [
						{
							artist: ["Queen"],
							length: 223,
							name: "Death On Two Legs (Dedicated to...)",
							type: "song",
						},
						{
							artist: "Tenacious D",
							length: 247,
							name: "Tribute",
							type: "song",
						},
						{
							artist: ["Queen"],
							length: 68,
							name: "Lazing on a Sunday Afternoon",
							type: "song",
						},
					],
					type: "album",
				},
			],
			{
				artists: {
					Queen: [
						"Death On Two Legs (Dedicated to...)",
						"Lazing on a Sunday Afternoon",
					],
					"Tenacious D": ["Tribute"],
				},
				songs: [
					"Death On Two Legs (Dedicated to...)",
					"Tribute",
					"Lazing on a Sunday Afternoon",
				],
				time: 538,
			},
		],
		[
			[
				{
					songs: [
						{
							artist: ["Queen"],
							length: 223,
							name: "Death On Two Legs (Dedicated to...)",
							type: "song",
						},
						{
							artist: "Tenacious D",
							length: 247,
							name: "Tribute",
							type: "song",
						},
						{
							artist: ["Queen"],
							length: 68,
							name: "Lazing on a Sunday Afternoon",
							type: "song",
						},
					],
					type: "album",
				},
			],
			{
				artists: {
					Queen: [
						"Death On Two Legs (Dedicated to...)",
						"Lazing on a Sunday Afternoon",
					],
					"Tenacious D": ["Tribute"],
				},
				songs: [
					"Death On Two Legs (Dedicated to...)",
					"Tribute",
					"Lazing on a Sunday Afternoon",
				],
				time: 538,
			},
		],
		[
			[
				{
					resolve: () => [
						{
							artist: ["Queen"],
							length: 223,
							name: "Death On Two Legs (Dedicated to...)",
							type: "song",
						},
						{
							artist: "Queen",
							length: 68,
							name: "Lazing on a Sunday Afternoon",
							type: "song",
						},
						{
							artist: ["David Bowie", "Queen"],
							length: 248,
							name: "Under Pressure",
							type: "song",
						},
					],
					type: "playlist",
				},
			],
			{
				artists: {
					"David Bowie": ["Under Pressure"],
					Queen: [
						"Death On Two Legs (Dedicated to...)",
						"Lazing on a Sunday Afternoon",
						"Under Pressure",
					],
				},
				songs: [
					"Death On Two Legs (Dedicated to...)",
					"Lazing on a Sunday Afternoon",
					"Under Pressure",
				],
				time: 539,
			},
		],
		[
			[
				{
					resolve: () => [
						{
							artist: ["Queen"],
							length: 223,
							name: "Death On Two Legs (Dedicated to...)",
							type: "song",
						},
						{
							artist: "Queen",
							length: 68,
							name: "Lazing on a Sunday Afternoon",
							type: "song",
						},
						{
							artist: ["David Bowie", "Queen"],
							length: 248,
							name: "Under Pressure",
							type: "song",
						},
					],
					type: "playlist",
				},

				{
					artist: "Tenacious D",
					length: 247,
					name: "Tribute",
					type: "song",
				},
			],
			{
				artists: {
					"David Bowie": ["Under Pressure"],
					Queen: [
						"Death On Two Legs (Dedicated to...)",
						"Lazing on a Sunday Afternoon",
						"Under Pressure",
					],
					"Tenacious D": ["Tribute"],
				},
				songs: [
					"Death On Two Legs (Dedicated to...)",
					"Lazing on a Sunday Afternoon",
					"Under Pressure",
					"Tribute",
				],
				time: 786,
			},
		],
	])("%j %j", (input, expected) => {
		expect(unrollPlaylist(input)).toEqual(expected);
	});
});
