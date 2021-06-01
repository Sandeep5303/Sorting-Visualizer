import React, { useContext, useState, useEffect } from 'react';

import { customToast } from '../config/helpers';
import SortingContext from '../context/sorting/sortingContext';
import BubbleSort from '../algos/BubbleSort';
import MergeSort from '../algos/MergeSort';

const Navbar = () => {
  const sortingContext = useContext(SortingContext);
  const { array, size, speed, generateArray, setArraySize, setSortingSpeed } =
    sortingContext;

  const [isSorting, setIsSorting] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Getting window width size for reponsive layout
  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  let maxSize;
  // Changing input range max value relative to window width size
  windowWidth <= 1706
    ? windowWidth <= 1279
      ? windowWidth <= 500
        ? (maxSize = 32)
        : (maxSize = 50)
      : (maxSize = 90)
    : (maxSize = 100);

  // Toast error message
  const showToast = () => {
    customToast('error', 'Sorting is in progress, Please wait!');
  };

  return (
    <div className='navbar py-1'>
      <div className='config'>
        <button
          className='btn btn-light'
          onClick={() => (isSorting ? showToast() : generateArray())}
        >
          Generate
        </button>
        <ul>
          <li>
            <p className='text-center pyy'>Array Size</p>
            <input
              className='slider array-size'
              type='range'
              min='5'
              max={maxSize}
              defaultValue={size}
              name='array'
              id='array'
              disabled={isSorting}
              onChange={e => setArraySize(e.target.value)}
            />
          </li>
          <li>
            <p className='text-center pyy'>Sorting Speed</p>
            <input
              className='slider sorting-speed'
              type='range'
              min='10'
              max='1000'
              defaultValue='100'
              name='speed'
              id='speed'
              disabled={isSorting}
              onChange={e => setSortingSpeed(e.target.value)}
            />
          </li>
        </ul>
      </div>
      <div className='sorting'>
        <button
          className='btn btn-light'
          onClick={() =>
            isSorting
              ? showToast()
              : BubbleSort(array, size, speed, setIsSorting)
          }
        >
          Bubble Sort
        </button>
        <button
          className='btn btn-light'
          onClick={() =>
            isSorting
              ? showToast()
              : MergeSort(array, size, speed, setIsSorting)
          }
        >
          Merge Sort
        </button>
        <button
          className='btn btn-light'
          onClick={() => customToast('error', 'Not yet implemented')}
        >
          Quick Sort
        </button>
        <button
          className='btn btn-light'
          onClick={() => customToast('error', 'Not yet implemented')}
        >
          Heap Sort
        </button>
      </div>
    </div>
  );
};

export default Navbar;
