// src/reducers/filterReducer.js
export const SET_FILTER = "SET_FILTER";
export const SET_SORT = "SET_SORT";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};
