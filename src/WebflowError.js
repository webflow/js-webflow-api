export default class WebflowError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.name = 'WebflowError';
  }
}
