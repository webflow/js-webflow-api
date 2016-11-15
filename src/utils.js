export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const pick = (obj, ...props) =>
  Object.assign({}, ...props.map(prop => ({ [prop]: obj[prop] })));

export const requiredArg = (argName) => {
  throw new Error(`Argument '${argName}' is required but was not present`);
};
