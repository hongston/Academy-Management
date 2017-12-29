import React from 'react';

import styles from './MainLayout.scss';
import Content from '@containers/Content/Content';
import Preselect from '@containers/Preselect/Preselect';
import Header from '@containers/Header/Header';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Body = (props) => <div className={styles.body}>{props.children}</div>;
class MainLayout extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Body>
          <Preselect />
          <Content />
        </Body>
      </Container>
    )
  }
}

export default MainLayout;