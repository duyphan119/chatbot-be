const { Wit } = require("node-wit");
const { getChatBotResponse } = require("../services/chatbotService");
const { getResponseNlp } = require("../train-nlp");
const getMessage = (req, res) => {
  const client = new Wit({ accessToken: "ZWDDHH4UFSH775RDWIUMF6BIFJPRJIWZ" });
  client
    .message("Hello", {})
    .then((data) => {
      res.json(data);
    })
    .catch(console.error);
};

const postMessage = async (req, res) => {
  const { message } = req.body;
  try {
    // Chat bot response
    let chatBotResponse;
    chatBotResponse = await getChatBotResponse(message);
    // if (chatBotResponse.text === "Xin lỗi, tôi không hiểu ý nghĩa câu này.") {
    // 	let responseNlp = await getResponseNlp(message);
    // 	if (responseNlp.answers.length !== 0) {
    // 		chatBotResponse = {
    // 			id: new Date().getTime(),
    // 			text: responseNlp.answers[Math.floor(Math.random() * responseNlp.answers.length)].answer,
    // 		};
    // 		return res.status(201).json({ code: 200, message: "Success", data: chatBotResponse });
    // 	}
    // }

    // Server response
    return res
      .status(200)
      .json({ code: 200, message: "Success", data: chatBotResponse });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, message: "Error" });
  }
};

module.exports = { getMessage, postMessage };
