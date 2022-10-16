import {randomBetween} from '../utils/misc';

/**
 * `Spy` means records every time the method is called
 *  with what parameters are passed. => jest.spyOn(Math, "random")
 */

const randomSpy = jest.spyOn(Math, 'random');

describe('RandomBetween', () => {
  describe('when Math.Random() return 0', () => {
    beforeEach(() => {
      //Find a way to mock Math.Random to return 0
      randomSpy.mockClear().mockReturnValue(0);
    });

    it('should return 3 when called with min=3 and max=5', () => {
      expect(randomBetween(3, 5)).toBe(3);
      // To be sure that it have been calleb one time. for this we have to clear the spyOn
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
  describe('when Math.Random() return 0.5', () => {
    beforeEach(() => {
      //Find a way to mock Math.Random to return 0
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it('should return 4 when called with min=3 and max=5', () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('when Math.Random() return 0.999999', () => {
    beforeEach(() => {
      //Find a way to mock Math.Random to return 0
      randomSpy.mockClear().mockReturnValue(0.999999);
    });

    it('should return 5 when called with min=3 and max=5', () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
