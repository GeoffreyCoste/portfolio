import React from 'react';

const NestedItemsList = ({ item, level }) => {
  let subItems = null;
  if (item.values && item.values.length) {
    subItems = (
      <ul className={`list list--${level}`}>
        {item.values.map((i, index) => (
          <NestedItemsList
            item={i}
            type="child"
            key={`${index}-c1acd9bf-3d98-402d-b04a-b39907f33596`}
            level={level + 1}
          />
        ))}
      </ul>
    );
  }

  return (
    <li className="list__item">
      {Array.isArray(item.name) === true ? item.name.join(' / ') : item.name}
      {subItems}
    </li>
  );
};

const ItemsList = ({ items }) => {
  return (
    <ul className="list list--0">
      {items.map((item, index) => (
        <NestedItemsList
          key={`${index}-8c7df5ad-b737-4968-be99-f7108960f6fc`}
          item={item}
          level={1}
        />
      ))}
    </ul>
  );
};

export default ItemsList;
