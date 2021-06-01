import { customToast } from '../config/helpers';

const COMPARE_COLOR = 'red';
const PRIMARY_COLOR = 'cyan';
const SECONDARY_COLOR = 'yellow';

// Bubble Sort Animation
export const animationBubbleSort = (animations, size, speed, setIsSorting) => {
  const arrayBars = document.querySelectorAll('.bar');

  const newAnimations = [];
  for (const animation of animations) {
    newAnimations.push(animation.compare);
    newAnimations.push(animation.compare);
    newAnimations.push(animation.swap);
    newAnimations.push(animation.last);
  }

  for (let i = 0; i < newAnimations.length; i++) {
    const getBarByIdx = () => {
      const [barOneIdx, barTwoIdx] = newAnimations[i];
      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];
      return { barOne, barTwo };
    };

    const isColorChange = i % 4 !== 2 && i % 4 !== 3;
    const isLastBarColorChange = i % 4 === 3 && newAnimations[i] !== null;
    if (newAnimations[i] === null) {
      continue;
    }

    if (isColorChange) {
      const { barOne, barTwo } = getBarByIdx();
      setTimeout(() => {
        const color = i % 4 === 0 ? COMPARE_COLOR : PRIMARY_COLOR;
        barOne.style.background = color;
        barTwo.style.background = color;
      }, i * speed);
    } else if (isLastBarColorChange === true) {
      const [last] = newAnimations[i];
      setTimeout(() => {
        arrayBars[last].style.background = SECONDARY_COLOR;
      }, i * speed);
    } else {
      setTimeout(() => {
        const { barOne, barTwo } = getBarByIdx();
        const barOneHeight = barOne.offsetHeight;
        const barTwoHeight = barTwo.offsetHeight;
        barOne.style.height = `${barTwoHeight}px`;
        barTwo.style.height = `${barOneHeight}px`;
        if (size <= 25) {
          const p1 = barOne.querySelector('p');
          const p2 = barTwo.querySelector('p');
          p1.innerHTML = `${barTwoHeight}`;
          p2.innerHTML = `${barOneHeight}`;
        }
      }, i * speed);
    }
    if (i === newAnimations.length - 1) {
      setTimeout(() => {
        const container = document.querySelector('.container');
        container.style.borderColor = SECONDARY_COLOR;
        customToast('success', 'Array is sorted!!');
        setIsSorting(false);
      }, i * speed);
    }
  }
};

// Merge Sort Animation
export const animationMergeSort = (animations, size, speed, setIsSorting) => {
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.querySelectorAll('.bar');
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOne = arrayBars[barOneIdx];
      const barTwo = arrayBars[barTwoIdx];
      const color = i % 3 === 0 ? COMPARE_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOne.style.backgroundColor = color;
        barTwo.style.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOne = arrayBars[barOneIdx];
        barOne.style.height = `${newHeight}px`;
        if (size <= 25) {
          const p1 = barOne.querySelector('p');
          p1.innerHTML = `${newHeight}`;
        }
      }, i * speed);
    }
    if (i === animations.length - 1) {
      setTimeout(() => {
        for (const bar of arrayBars) {
          bar.style.background = SECONDARY_COLOR;
        }
        const container = document.querySelector('.container');
        container.style.borderColor = SECONDARY_COLOR;
        customToast('success', 'Array is sorted!!');
        setIsSorting(false);
      }, i * speed);
    }
  }
};
