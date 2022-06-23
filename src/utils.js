export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export const pick = (obj, ...props) => {
  const picked = {};

  props.forEach((prop) => {
    if (obj[prop] !== undefined) {
      picked[prop] = obj[prop];
    }
  });

  return picked;
};
