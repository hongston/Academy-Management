import React from 'react';

import styles from './Preselect.scss';
import StudentPart from '@components/StudentPart/StudentPart';
import TeacherPart from '@components/TeacherPart/TeacherPart';

const Container = (props) =>  <div className={styles.container}>{props.children}</div>;
class Preselect extends React.Component {
  render() {
    return (
      <Container>
        <StudentPart />
        <TeacherPart />
      </Container>
    )
  }
}

export default Preselect;