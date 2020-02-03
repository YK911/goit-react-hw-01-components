import React from "react";
import PropTypes from "prop-types";
import styles from "./TransactionsHistory.module.css";

function firstLetter(type) {
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
}

const TransactionsHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{firstLetter(type)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string
};

export default TransactionsHistory;
