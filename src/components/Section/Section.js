import React from 'react';

import styles from './Section.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Section = (props) => {
  return (
    <Container>
    </Container>
  )
}

export default Section;