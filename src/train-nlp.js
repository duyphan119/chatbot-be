const { dockStart } = require("@nlpjs/basic");
const path = require("path");

module.exports.trainNlp = async () => {
	const dock = await dockStart({ use: ["Basic"] });
	const nlp = dock.get("nlp");
	await nlp.addCorpus(path.join(__dirname, "corpus_data/corpus-vi-basic.json"));
	await nlp.train();
};

module.exports.getResponseNlp = async (message) => {
	const dock = await dockStart({ use: ["Basic"] });
	const nlp = dock.get("nlp");
	return nlp.process("vi", message);
};
