const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ languages: ["vi"], forceNER: true });

manager.addDocument("vi", "", "");
