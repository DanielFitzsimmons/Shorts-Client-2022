import React from 'react';
import './dropDown.css';

function dropDown(props) {
  const { menuName, items, onItemSelect, selectedItem } = props;
  return (

    <div className="dropdown d-inline">
      {/* Dropdown Button */}
      <button
        className="btn btn-primary dropdown-toggle gbg-gray"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {menuName}
      </button>
      {/* /Dropdown Button */}
      {/* Dropdown List */}
      <div
        className="dropdown-menu gbg-lightgray shadow text-black m-2 border"
        aria-labelledby="dropdownMenuButton"
      >
        {items.map((item) => (
          <button
            className={
              item === selectedItem
                ? 'dropdown-item small gbg-purple text-white'
                : 'dropdown-item small'
            }
            key={item._id}
            onClick={() => onItemSelect(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      {/* /Dropdown List */}
    </div>
  );
}

export default dropDown;
