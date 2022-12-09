import React from "react";
import PropTypes from "prop-types";
import s from "./TransactionItem.module.css";

const TransactionItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <tr key={item.id}>
          <td> {item.type} </td>
          <td> {item.amount} </td>
          <td> {item.currency} </td>
        </tr>
      ))}
    </>
  );
};
// console.log(TransactionItem);
TransactionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionItem;
