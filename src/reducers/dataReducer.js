// src/reducers/dataReducer.js
const initialState = {
  data: null,
  token: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {...state, data: action.payload};
    case 'SET_TOKEN':
      return {...state, token: action.payload};
    default:
      return state;
  }
};

export default dataReducer;
