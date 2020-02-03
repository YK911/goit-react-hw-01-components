import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistic.module.css";

const colors = [
  "rgb(79, 196, 246)",
  "rgb(163, 60, 242)",
  "rgb(230, 76, 101)",
  "rgb(33, 184, 198)",
  "rgb(64, 98, 132)"
];

const randomColor = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const Statistic = ({ statistic }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.list}>
        {statistic.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            key={id}
            style={{
              backgroundColor: `${colors[randomColor(0, colors.length - 1)]}`
            }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistic.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number
};

export default Statistic;
