export class WebflowError extends Error {}

export class WebflowArgumentError extends WebflowError {
  constructor(name) {
    super(`Argument '${name}' is required but was not present`);
  }
}

export class WebflowRequestError extends WebflowError {
  constructor(error) {
    super(error.err ? error.err : "Unknown error occured");
    Object.assign(this, error);
  }
}
