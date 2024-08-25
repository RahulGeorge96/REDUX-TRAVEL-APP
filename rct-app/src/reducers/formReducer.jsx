// src/reducers/formReducer.js
export const FORM_STEP = "FORM_STEP";
export const FORM_UPDATE = "FORM_UPDATE";

export const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_STEP:
      return {
        ...state,
        step: action.payload,
      };
    case FORM_UPDATE:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
