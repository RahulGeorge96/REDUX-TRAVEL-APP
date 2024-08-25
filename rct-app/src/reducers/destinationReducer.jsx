// import { FETCH_DESTINATIONS_FAILURE, FETCH_DESTINATIONS_REQUEST, FETCH_DESTINATIONS_SUCCESS } from "../actions/destinationActions";


// const initialState = {
//   loading: false,
//   destinations: {},
//   error: "",
// };

// const destinationReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DESTINATIONS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case FETCH_DESTINATIONS_SUCCESS:
//       return {
//         loading: false,
//         destinations: action.payload,
//         error: "",
//       };
//     case FETCH_DESTINATIONS_FAILURE:
//       return {
//         loading: false,
//         destinations: {},
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default destinationReducer;


// src/reducers/destinationReducer.js
import {
  FETCH_DESTINATIONS_REQUEST,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_DESTINATIONS_FAILURE,
} from '../actions/destinationActions';

const initialState = {
  loading: false,
  destinations: {},
  error: '',
};

const destinationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DESTINATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DESTINATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        destinations: action.payload,
      };
    case FETCH_DESTINATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default destinationReducer;

