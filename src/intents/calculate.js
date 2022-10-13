const Parser = require("expr-eval").Parser;

const randomResponse = (result) => {
	const responses = [`Kết quả bằng ${result}`, `Kết quả là ${result}`, `Phép tính có kết quả là ${result}`];

	return responses[Math.floor(Math.random() * responses.length)];
};

const getResponseCalculate = async (entities) => {
	try {
		const keys = Object.keys(entities);
		let expression;
		keys.forEach((key) => {
			let findExpression = entities[key].find((val) => val.name === "wit$math_expression");
			if (findExpression) {
				expression = findExpression.value;
			}
		});
		console.log("Hỏi tính toán");
		if (!expression) {
			let expr_res = Parser.evaluate(entities["wit$location:location"].map((val) => val.value).join("-"));
			return randomResponse(expr_res);
		}
		if (expression) {
			if (expression[expression.length - 1] === "=") {
				expression[expression.length - 1] = "";
			}
			let expr_res = Parser.evaluate(expression.replaceAll("cộng", "+").replaceAll("-", "+-").replaceAll("nhân", "*").replaceAll("chia", "/"));
			return randomResponse(expr_res);
		}
	} catch (error) {
		console.log(error);
	}
	return "Xin lỗi, biểu thức này tôi không thể tính được";
};

module.exports = { getResponseCalculate };
