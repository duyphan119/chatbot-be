const fetch = require("node-fetch");
const slugify = require("slugify");
const getResponseWeather = async (entities) => {
	try {
		const keys = Object.keys(entities);
		let locationString;
		let time;
		keys.forEach((key) => {
			let findLocationString = entities[key].find((val) => val.name === "wit$location");
			if (findLocationString) {
				locationString = findLocationString.value;
			}
			let findTime = entities[key].find((val) => val.name === "wit$datetime");
			if (findTime) {
				time = new Date(findTime.value);
			}
		});
		console.log("Hỏi thời tiết");
		if (!locationString) {
			return "Thời tiết ở đâu";
		}
		if (!time || time.getHours() === 0) {
			time = new Date().getTime();
		}

		console.log({
			locationString,
			url: encodeURI(
				`https://api.openweathermap.org/data/2.5/forecast?q=${slugify(locationString, {
					replacement: " ",
				})}&appid=7bff78e473a0538860bc94c92d5a3b7c&lang=vi`
			),
		});
		const res = await fetch(
			encodeURI(
				`https://api.openweathermap.org/data/2.5/forecast?q=${slugify(locationString, {
					replacement: " ",
				})}&appid=7bff78e473a0538860bc94c92d5a3b7c&lang=vi`
			)
		);

		let obj = JSON.parse(await res.text());

		if (obj && (obj.cod === "200" || obj.cnt === 40)) {
			const now = new Date();
			if (now.getTime() - time < 24 * 60 * 60 * 1000) {
				return `Thời tiết hiện tại ở ${obj.city.name} là: ${obj.list[new Date(time).getHours()].weather[0].description}. Nhiệt độ ${(
					obj.list[new Date(time).getHours()].main.temp - 273
				).toFixed(1)}°C. `;
			}
		}
	} catch (error) {
		console.log(error);
	}

	return "Xin lỗi, tôi chưa hiểu ý nghĩa của câu này";
};

module.exports = { getResponseWeather };
