import React from 'react';
import './style.scss';

const Table = ({ items }) => {
  return (
    <table className="table__block">
      <tbody className="table__block__body table-body">
        {items.map((item, index) => {
          const { title, school, year } = item;
          return (
            <tr
              className="table-body__row table-row"
              key={`${index}-525d20c0-3196-49c4-91a1-1c0bae8d0187`}
            >
              <td className="table-row__cell cell">
                <div className="cell__text">{title}</div>
              </td>
              <td className="table-row__cell cell">
                <div className="cell__text">{school}</div>
              </td>
              <td className="table-row__cell cell">
                <div className="cell__text">{year}</div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
