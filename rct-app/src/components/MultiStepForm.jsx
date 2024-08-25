// src/components/MultiStepForm.js
import React, { useReducer } from "react";
import { FORM_STEP, FORM_UPDATE, formReducer } from "../reducers/formReducer";


const MultiStepForm = () => {
  const [state, dispatch] = useReducer(formReducer, {
    step: 1,
    formData: {},
  });

  const handleChange = (e) => {
    dispatch({
      type: FORM_UPDATE,
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const nextStep = () => {
    dispatch({ type: FORM_STEP, payload: state.step + 1 });
  };

  const prevStep = () => {
    dispatch({ type: FORM_STEP, payload: state.step - 1 });
  };

  return (
    <div>
      {state.step === 1 && (
        <div>
          <h2>Step 1</h2>
          <input
            type="text"
            name="destinationName"
            value={state.formData.destinationName || ""}
            onChange={handleChange}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {state.step === 2 && (
        <div>
          <h2>Step 2</h2>
          <input
            type="text"
            name="destinationDescription"
            value={state.formData.destinationDescription || ""}
            onChange={handleChange}
          />
          <button onClick={prevStep}>Back</button>
          <button onClick={nextStep}>Next</button>
        </div>
      )}
      {state.step === 3 && (
        <div>
          <h2>Step 3</h2>
          <button onClick={prevStep}>Back</button>
          <button onClick={() => console.log(state.formData)}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
