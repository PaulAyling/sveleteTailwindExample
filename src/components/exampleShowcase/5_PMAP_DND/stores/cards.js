import { writable } from 'svelte/store';
import { authenticatedUser } from './authenticatedUser';
import { get } from 'svelte/store';

// Data {methods below with store output}
const importedCards = {
	1: {
		componentId: 1,
		url: 'tbc',
		allTags: ['lesiure', 'sport', 'machines'],
		usersVersion: {
			// userId:{ userId :1, versionId :1}
			1: { userId: 1, versionId: 1 },
			2: { userId: 2, versionId: 2 }
		},
		versions: {
			1: {
				title: 'Which Bicycle Should I Buy',
				imageUrl: 'https://cdn.mos.cms.futurecdn.net/dpA5bpmPcBM6rPszKB9SpH-1200-80.jpg',
				notes: 'tbc'
			},
			2: {
				title: 'About Bicycles2',
				imageUrl: 'https://bikexchange.com/wp-content/uploads/2020/12/bikes1212-e1630349513789.png',
				notes: 'tbc'
			}
		}
	},
	2: {
		componentId: 2,
		url: 'https://en.wikipedia.org/wiki/Road_bicycle',
		allTags: ['road', 'sport'],
		usersVersion: {
			1: { userId: 1, versionId: 1 },
			2: { userId: 2, versionId: 2 }
		},
		versions: {
			1: {
				title: 'Road Bikes',
				imageUrl:
					'https://cdn.mos.cms.futurecdn.net/dpA5bpmPcBM6rPszKB9SpH-1200-80.jpg',
				notes: 'Road racing can be fun...'
			}
		}
	},
	3: {
		componentId: 3,
		url: 'https://en.wikipedia.org/wiki/Mountain_biking',
		allTags: ['road', 'sport'],
		usersVersion: {
			1: { userId: 1, versionId: 2 },
			2: { userId: 2, versionId: 1 }
		},
		versions: {
			1: {
				title: 'Mountain Bikes',
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg',
				notes: 'Mountain bikeing is more fun and very dangerous, and soo exckting!'
			},
			2: {
				title: 'Tricycle',
				imageUrl:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/250px-MtnBiking_SedonaMag.jpg',
				notes: 'Mountain bikeing is more fun and very dangerous, and soo exckting!'
			}
		}
	},
	4: {
		componentId: 4,
		url: 'https://www.trekbikes.com/us/en_US/',
		allTags: ['mountainbike', 'manufacturer'],
		usersVersion: {
			1: { userId: 1, versionId: 1 }
		},
		versions: {
			1: {
				title: 'Trek Mountain Bikes',
				imageUrl:
					'https://w7.pngwing.com/pngs/913/598/png-transparent-trek-bicycle-corporation-cycling-logo-triathlon-trekking-text-retail-bicycle-thumbnail.png',
				notes: 'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
			},
		}
	},
	5: {
		componentId: 4,
		url: 'https://www.trekbikes.com/us/en_US/',
		allTags: ['mountainbike', 'manufacturer'],
		usersVersion: {
			1: { userId: 1, versionId: 1 }
		},
		versions: {
			1: {
				title: 'Marin',
				imageUrl:
					'https://s3.us-east-1.amazonaws.com/craft-marinbikes/images/2020/mod/hero/image/_heroStandard2795X1310/22-headlands2-action-8_2022-01-04-105256_tsmh.jpg',
				notes: 'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
			},
		}
	},
	6: {
		componentId: 4,
		url: 'https://www.trekbikes.com/us/en_US/',
		allTags: ['mountainbike', 'manufacturer'],
		usersVersion: {
			1: { userId: 1, versionId: 1 }
		},
		versions: {
			1: {
				title: 'Kona',
				imageUrl:
					'https://mbaction.com/wp-content/uploads/2022/01/M1_Kona_Honzo_Action_4_e-copy.jpg',
				notes: 'Trek started in a small Wisconsin barn in 1976, but our founders always saw something bigger. Forty-four years later, were on a mission to make our world a .'
			},
		}
	},
};
// RECONSTRUCT THE ABOVE JUST CONTAINING DATA FOR AUTHENTICATED USER
// 0.1 initialaize vals
const authenticatedUser_snp = get(authenticatedUser);
const userId = authenticatedUser_snp.userId;

// 1. Create dictionary {cardId{cardId:versionId},....}
const createCardIdVersionDict = (importedCards, userId) => {
	let res = {};
	for (const [key, value] of Object.entries(importedCards)) {
		let newVal = value.usersVersion[userId].versionId;
		res = { ...res, [key]: newVal };
	}
	return res;
};
const versionIdLookup = createCardIdVersionDict(importedCards, userId);
// 2. Reconstruct tcard with only data for authenticated user.
const createUsersCards = (importedCards, versionIdLookup) => {
	let res = {};
	for (const [key, value] of Object.entries(importedCards)) {
		let versionNumber = versionIdLookup[key];
		res = {
			...res,
			[key]: {
				componentId: value.componentId,
				url: value.url,
				allTags: value.allTags,
				title: value.versions[versionNumber].title,
				imageUrl: value.versions[versionNumber].imageUrl,
				notes: value.versions[versionNumber].notes
			}
		};
	}
	return res;
};
const usersCard = createUsersCards(importedCards, versionIdLookup);

// 3. Create a new store containing only records for authenticated user
export const cards = writable(usersCard);
