import React, { useEffect, useContext } from 'react';

import { Toaster } from 'react-hot-toast';

import Overlay from '../components/Overlay';
import GenerateArrayBars from './GenerateArrayBars';
import Navbar from './Navbar';
import Social from './Social';
import SortingContext from '../context/sorting/sortingContext';

const SortingVisualizer = () => {
  const sortingContext = useContext(SortingContext);
  const { array, size, generateArray } = sortingContext;

  // Generating random array on page reload and onChange array size
  useEffect(() => {
    generateArray();
    // eslint-disable-next-line
  }, [size]);

  return (
    <div className='main'>
      <Toaster
        toastOptions={{
          duration: 2500,
        }}
      />

      {/* Overlay */}
      {/* <Overlay /> */}

      {/* HEADER */}
      <Navbar />

      {/* SECTION - BARS */}
      <div className='container'>
        <GenerateArrayBars array={array} size={size} />
      </div>

      {/* Footer */}
      <Social />
    </div>
  );
};

export default SortingVisualizer;
