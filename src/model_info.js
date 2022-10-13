const fs = require("fs");
const path = require("path");

let model = JSON.parse(fs.readFileSync(path.join(__dirname, "model-bert.nlp"), { encoding: "utf-8" }));

// console.log(model.nluManager.domainManagers.vi.domains.master_domain.neuralNetwork);

const p = model.nluManager.domainManagers.vi.domains.master_domain.neuralNetwork.perceptrons;

// console.log("layer:", p.length);

// p.forEach((val, index) => {
//     console.log(`${index}: ${val.length}`)
//     if (index === 104) console.log(val)
// })

module.exports = {
	p,
};
