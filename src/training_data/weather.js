const entity = require("./constants/entity_type");

const intentName = "temperature";

const utterances = [
	{
		text: "Thời tiết ở Long An thế nào ?",
		entities: [{ entity: entity.LOCATION, body: "Long An" }],
		traits: [],
	},
	{
		text: "Thời tiết hôm nay ở Long An thế nào ?",
		entities: [
			{ entity: entity.LOCATION, body: "Long An" },
			{ entity: entity.DATETIME_NR, body: "hôm nay" },
		],
		traits: [],
	},
	{
		text: "Hôm nay thời tiết ở Long An thế nào ?",
		entities: [
			{ entity: entity.LOCATION, body: "Long An" },
			{ entity: entity.DATETIME_NR, body: "Hôm nay" },
		],
		traits: [],
	},
];
module.exports = { intentName, utterances };
