import React from 'react';

import styles from './Navigation.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Navigation = (props) => {
  return (
    <Container>
    </Container>
  )
}

export default Navigation;