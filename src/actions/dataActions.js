// src/actions/dataActions.js
export const setData = data => {
  return {
    type: 'SET_DATA',
    payload: data,
  };
};
