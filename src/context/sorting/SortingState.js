import React, { useReducer } from 'react';

import SortingContext from '../sorting/sortingContext';
import SortingReducer from '../sorting/sortingReducer';
import { SET_ARRAY, SET_ARRAY_SIZE, SET_SORTING_SPEED } from '../types';
import {
  generateRandomNumber,
  changeColorToInitial,
} from '../../config/helpers';

const SortingState = props => {
  const initialState = {
    array: [],
    size: 32,
    speed: 100,
  };

  const [state, dispatch] = useReducer(SortingReducer, initialState);

  // Generate Array
  const generateArray = () => {
    changeColorToInitial();
    const rArray = [];
    for (let i = 0; i < state.size; i++) {
      rArray.push(generateRandomNumber(20, 470));
    }
    dispatch({
      type: SET_ARRAY,
      payload: rArray,
    });
  };

  // Set Array Size
  const setArraySize = size => {
    dispatch({
      type: SET_ARRAY_SIZE,
      payload: size,
    });
  };

  // Set Sorting Speed
  const setSortingSpeed = speed => {
    dispatch({
      type: SET_SORTING_SPEED,
      payload: speed,
    });
  };

  return (
    <SortingContext.Provider
      value={{
        array: state.array,
        size: state.size,
        speed: state.speed,
        generateArray,
        setArraySize,
        setSortingSpeed,
      }}
    >
      {props.children}
    </SortingContext.Provider>
  );
};

export default SortingState;
