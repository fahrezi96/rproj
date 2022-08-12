import React from 'react';

export default function ListGroup({ items, textProperty, valueProperty, selectedItem, onItemSelect }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty] || 0}
          className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
}

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};
