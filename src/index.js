// module.exports = require("./Webflow").default;
// module.exports.WebflowError = require("./WebflowError").default;
async function WebflowFunc() {
const { Webflow } = await import('./Webflow.mjs')
}
WebflowFunc()

async function WebflowErrorFunc() {
const { WebflowError } = await import('./WebflowError.mjs')
}
WebflowErrorFunc()
