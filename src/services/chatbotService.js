const { Wit } = require("node-wit");
const client = new Wit({ accessToken: "ZWDDHH4UFSH775RDWIUMF6BIFJPRJIWZ" });
const fetch = require("node-fetch");
const { getResponseWeather } = require("../intents/weather");
const { getResponseCalculate } = require("../intents/calculate");

module.exports.getResponse = async (input) => {
	return client.message(input);
};
const findIntent = (name, intents) => {
	return intents.findIndex((item) => item.name === name) !== -1;
};

const checkIntent = async (response) => {
	if (findIntent("ask_weather", response.intents)) {
		const text = await getResponseWeather(response.entities);
		return { text, id: new Date().getTime() };
	} else if (findIntent("ask_calculate", response.intents)) {
		const text = await getResponseCalculate(response.entities);
		return { text, id: new Date().getTime() };
	}

	return {
		text: "Xin lỗi, tôi không hiểu ý nghĩa câu này.",
		id: new Date().getTime(),
	};
};

module.exports.getChatBotResponse = async (input) => {
	const res = await client.message(input);

	return checkIntent(res);
};
// else if (findIntent("order", response.intents)) {
// 	const product = response.entities["product:product"];
// 	const quantity = response.entities["quantity:quantity"];
// 	const variantValues = response.entities["variant_value:variant_value"];

// 	return {
// 		text: `Xác nhận mua ${quantity[0].value} ${product[0].value} ${variantValues
// 			.splice(0, 2)
// 			.map((item) => item.value)
// 			.join(" ")}`,
// 		id: new Date().getTime(),
// 	};
// }
