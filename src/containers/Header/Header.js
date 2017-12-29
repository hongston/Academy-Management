import React from 'react';

import styles from './Header.scss';
import User from '@components/HeaderUserInfo/HeaderUserInfo';
import Navigation from '@components/Navigation/Navigation';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
class Header extends React.Component {
  render() {
    return (
      <Container>
        <User />
        <Navigation />
      </Container>
    )
  }
}
export default Header;