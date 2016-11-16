export const isObjectEmpty = obj => Object.keys(obj).length === 0;

export const pick = (obj, ...props) => {
  const picked = {};

  props.forEach((prop) => {
    if (obj[prop] !== undefined) {
      picked[prop] = obj[prop];
    }
  });

  return obj;
};

export const requiredArg = (argName) => {
  throw new Error(`Argument '${argName}' is required but was not present`);
};
