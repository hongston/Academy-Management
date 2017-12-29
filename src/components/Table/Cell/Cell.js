import React from 'react';

import styles from './Cell.scss';

export const Cell = (props) => {
  return (
    <div
      style={props.style}
      onClick={props.onClick}
      className={styles.container}>
      {props.children}
    </div>
  );
}