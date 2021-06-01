import React, { useEffect, useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import useSound from 'use-sound';

import popSfx from '../sound/pop.mp3';
import Overlay from '../components/Overlay';
import GenerateArrayBars from './GenerateArrayBars';
import Navbar from './Navbar';
import Social from './Social';
import SortingContext from '../context/sorting/sortingContext';

const SortingVisualizer = () => {
  const sortingContext = useContext(SortingContext);
  const { array, size, generateArray } = sortingContext;

  const [bar] = useSound(popSfx, { volume: 0.1 });

  // Generating random array on page reload and onChange array size
  useEffect(() => {
    bar();
    generateArray();
    // eslint-disable-next-line
  }, [size]);

  return (
    <div className='main'>
      <Toaster
        toastOptions={{
          duration: 1500,
        }}
      />

      {/* Overlay */}
      <Overlay />

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
