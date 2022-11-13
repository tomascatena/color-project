/**
 * Function to move an item in an array
 * @param array The array to move the item in
 * @param fromIndex The index of the item to move
 * @param toIndex The index to move the item to
 */
export const arrayMoveMutable = <T>(
  array: T[],
  fromIndex: number,
  toIndex: number
) => {
  const startIndex = fromIndex < 0 ? array.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = toIndex < 0 ? array.length + toIndex : toIndex;

    const [item] = array.splice(fromIndex, 1);

    array.splice(endIndex, 0, item);
  }
};

/**
 * Function to move an item in an array immutably
 * @param array The array to move the item in
 * @param fromIndex The index of the item to move
 * @param toIndex The index to move the item to
 * @returns A new array with the item moved
 */
export const arrayMoveImmutable = <T>(
  array: T[],
  fromIndex: number,
  toIndex: number
) => {
  const newArray = [...array];

  arrayMoveMutable(newArray, fromIndex, toIndex);

  return newArray;
};
