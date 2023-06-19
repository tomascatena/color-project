import { arrayMoveImmutable, arrayMoveMutable } from './arrayMove'; // Adjust the import based on your file structure

describe(`arrayMoveMutable`, () => {
  test(`should move item within array`, () => {
    const array = [1, 2, 3, 4, 5];
    arrayMoveMutable(array, 1, 3);
    expect(array).toEqual([1, 3, 4, 2, 5]);
  });

  test(`should move item to the end using negative index`, () => {
    const array = [1, 2, 3, 4, 5];
    arrayMoveMutable(array, 1, -1);
    expect(array).toEqual([1, 3, 4, 5, 2]);
  });

  test(`should do nothing for invalid fromIndex`, () => {
    const array = [1, 2, 3, 4, 5];
    arrayMoveMutable(array, -10, 2);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test(`should work with empty array`, () => {
    const array = [];
    arrayMoveMutable(array, 1, 3);
    expect(array).toEqual([]);
  });
});

describe(`arrayMoveImmutable`, () => {
  test(`should move item and return a new array`, () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = arrayMoveImmutable(array, 1, 3);
    expect(newArray).toEqual([1, 3, 4, 2, 5]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test(`should move item to the end using negative index and return a new array`, () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = arrayMoveImmutable(array, 1, -1);
    expect(newArray).toEqual([1, 3, 4, 5, 2]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test(`should return a new array identical to original for invalid fromIndex`, () => {
    const array = [1, 2, 3, 4, 5];
    const newArray = arrayMoveImmutable(array, -10, 2);
    expect(newArray).toEqual([1, 2, 3, 4, 5]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test(`should work with empty array and return a new empty array`, () => {
    const array = [];
    const newArray = arrayMoveImmutable(array, 1, 3);
    expect(newArray).toEqual([]);
    expect(array).toEqual([]);
  });
});
