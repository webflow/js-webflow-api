export interface IRequestError {
  msg: string;
  code: number;
  name: string;
  path: string;
  err: string;
}

export class RequestError extends Error implements IRequestError {
  msg: string;
  code: number;
  name: string;
  path: string;
  err: string;

  constructor(error: IRequestError) {
    super(error.err ? error.err : "Unknown error occured");
    Object.assign(this, error);
  }
}

export class ArgumentError extends Error {
  constructor(name: string) {
    super(`Argument '${name}' is required but was not present`);
  }
}

export function requireArgs(args: object) {
  for (const key in args) {
    if (!args[key]) throw new ArgumentError(key);
  }
}
