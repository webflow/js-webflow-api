import ExtendableError from "es6-error";

export default class WebflowError extends ExtendableError {}

export const buildRequiredArgError = (name) => new WebflowError(`Argument '${name}' is required but was not present`);
