// src/components/DestinationList.js
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchDestinations } from "../actions/destinationActions";


// const DestinationList = () => {
//   const dispatch = useDispatch();
//   const { loading, destinations, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchDestinations());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {Object.keys(destinations).map((key) => (
//         <div key={key}>
//           <h2>{destinations[key].name}</h2>
//           <p>{destinations[key].country}</p>
//           <p>{destinations[key].description}</p>
//           <img
//             src={destinations[key].profileImg}
//             alt={destinations[key].name}
//             style={{ width: "200px" }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DestinationList;

// src/components/DestinationList.js
// src/selectors/destinationSelectors.js
 const selectDestinations = (state) => state.destinations;
 const selectLoading = (state) => state.loading;
 const selectError = (state) => state.error;

 // src/components/DestinationList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDestinations } from '../actions/destinationActions';


const DestinationList = () => {
  const dispatch = useDispatch();
  const destinations = useSelector(selectDestinations);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Destinations</h1>
      <ul style={{ display: "grid", gridTemplateColumns:"repeat(3,1fr)",gap:"10px" }}>
        {Object.keys(destinations).map((key) => {
          const item = destinations[key];
          return (
            <li key={key}>
              <h2>{item.name}</h2>
              <p>{item.country}</p>
              <p>{item.description}</p>
              <img
                style={{ height: "100px" }}
                src={item.profileImg}
                alt={item.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DestinationList;
