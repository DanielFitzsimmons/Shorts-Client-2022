import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const Search = (props) => {
  const { value, onChange } = props;

  return (
    <div className="pt-3 px-3 position-relative">
      <label htmlFor="search" className="form-label visually-hidden">
        Search
      </label>
      <input
        type="text"
        className="form-control search"
        id="search"
        name="search"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <div className="gbg-purple search-icon text-white">
        <Icon.Search className="icon sm-icon-l1" />
      </div>
    </div>
  );
};
export default Search;
