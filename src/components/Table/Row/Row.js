import React from 'react';

import styles from './Row.scss';

export const Row = (props) => (
  <div className={styles.container}>
    {props.children}
  </div>
)