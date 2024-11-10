// filtered select array items
export const toggleArrayItemExists = (array, item) => {
  const itemExists = array.includes(item);
  return itemExists ? array.filter((i) => i !== item) : [...array, item];
};
