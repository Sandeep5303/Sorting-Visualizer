import React from 'react';

const GenerateArrayBars = ({ array, size }) => {
  // Showing bar value when array length is <= 15
  let showValue = size <= 15 ? true : false;
  return (
    <div id='array-bars'>
      {array &&
        array.map((a, i) => (
          <div
            className={`bar bar-${i} ${showValue ? 'wideBar' : ''}`}
            style={{ height: `${a}px` }}
            key={i}
          >
            {showValue && <p>{a}</p>}
          </div>
        ))}
    </div>
  );
};

export default GenerateArrayBars;
