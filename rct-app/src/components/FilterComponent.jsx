// src/components/FilterComponent.js
import React, { useReducer } from "react";
import { filterReducer, SET_FILTER, SET_SORT } from "../reducers/filterReducer";


const FilterComponent = ({ data }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    filters: {},
    sort: "name",
  });

  const handleFilterChange = (e) => {
    dispatch({
      type: SET_FILTER,
      payload: { key: e.target.name, value: e.target.value },
    });
  };

  const handleSortChange = (e) => {
    dispatch({ type: SET_SORT, payload: e.target.value });
  };

  const filteredData = data
    .filter((item) =>
      Object.keys(state.filters).every((key) =>
        item[key]?.toString().includes(state.filters[key])
      )
    )
    .sort((a, b) => {
      if (a[state.sort] < b[state.sort]) return -1;
      if (a[state.sort] > b[state.sort]) return 1;
      return 0;
    });

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Filter by name"
        onChange={handleFilterChange}
      />
      <select name="sort" onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="country">Country</option>
      </select>
      <ul>
        {filteredData.map((item) => (
          <li key={item.name}>
            {item.name} - {item.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
