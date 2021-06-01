import { animationBubbleSort } from '../animation/Animation';

/**
 *
 * @param {array} array
 * @param {number} size
 * @param {number} speed
 * @param {function setIsSorting(boolean) { }}
 * @description BubbleSort is a synchronous function, instead of
 * delaying it we are storing the steps in animations array for later usage.
 */
const BubbleSort = (array, size, speed, setIsSorting) => {
  setIsSorting(true);
  const animations = [];
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      const animation = {};
      animation.compare = [j, j + 1];
      // console.log('compare', array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        animation.swap = [j, j + 1];
        // console.log('swap', array[j], array[j + 1]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      } else {
        animation.swap = null;
      }
      j === array.length - i - 1
        ? (animation.last = [j + 1])
        : (animation.last = null);

      animations.push(animation);
    }
  }
  /* Color first index after completion of bubblesort,
  commenting out below code will leave first index to be colored
  */
  animations.push({
    compare: null,
    swap: null,
    last: [0],
  });

  /**
   * animations array consists of 3 objects:
   * 1. compare - indexes of two bars to be compared
   * 2. swap - indexes of two bars to be swap
   * 3. last - index of last sorted bar
   */
  animationBubbleSort(animations, size, speed, setIsSorting);
};

export default BubbleSort;
