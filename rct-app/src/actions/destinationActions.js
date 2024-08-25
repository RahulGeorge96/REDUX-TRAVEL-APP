// // src/actions/destinationActions.js
// export const FETCH_DESTINATIONS_REQUEST = "FETCH_DESTINATIONS_REQUEST";
// export const FETCH_DESTINATIONS_SUCCESS = "FETCH_DESTINATIONS_SUCCESS";
// export const FETCH_DESTINATIONS_FAILURE = "FETCH_DESTINATIONS_FAILURE";

// export const fetchDestinationsRequest = () => ({
//   type: FETCH_DESTINATIONS_REQUEST,
// });

// export const fetchDestinationsSuccess = (destinations) => ({
//   type: FETCH_DESTINATIONS_SUCCESS,
//   payload: destinations,
// });

// export const fetchDestinationsFailure = (error) => ({
//   type: FETCH_DESTINATIONS_FAILURE,
//   payload: error,
// });

// export const fetchDestinations = () => {
//   return (dispatch) => {
//     dispatch(fetchDestinationsRequest());
//     fetch(
//       "https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json"
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchDestinationsSuccess(data));
//       })
//       .catch((error) => {
//         dispatch(fetchDestinationsFailure(error.message));
//       });
//   };
// };

// src/actions/destinationActions.js
export const FETCH_DESTINATIONS_REQUEST = 'FETCH_DESTINATIONS_REQUEST';
export const FETCH_DESTINATIONS_SUCCESS = 'FETCH_DESTINATIONS_SUCCESS';
export const FETCH_DESTINATIONS_FAILURE = 'FETCH_DESTINATIONS_FAILURE';

export const fetchDestinationsRequest = () => ({
  type: FETCH_DESTINATIONS_REQUEST,
});

export const fetchDestinationsSuccess = (destinations) => ({
  type: FETCH_DESTINATIONS_SUCCESS,
  payload: destinations,
});

export const fetchDestinationsFailure = (error) => ({
  type: FETCH_DESTINATIONS_FAILURE,
  payload: error,
});

export const fetchDestinations = () => {
  return (dispatch) => {
    dispatch(fetchDestinationsRequest());
    fetch('https://rct-sprint-1-b38-eval-default-rtdb.asia-southeast1.firebasedatabase.app/destinations.json')
      .then((response) => response.json())
      .then((data) => dispatch(fetchDestinationsSuccess(data)))
      .catch((error) => dispatch(fetchDestinationsFailure(error)));
  };
};
