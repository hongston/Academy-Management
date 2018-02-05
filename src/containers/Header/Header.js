import React from 'react';
import { connect } from 'react-redux';

import styles from './Header.scss';
import User from '@components/HeaderUserInfo/HeaderUserInfo';
import Navigation from '@components/Navigation/Navigation';
import { appendSection } from '@redux/actions/sectionActions';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
class Header extends React.Component {
  constructor() {
    super();
    this._handleMenuClick = this._handleMenuClick.bind(this);
  }
  _handleMenuClick(menu) {
    this.props.appendSection(menu.key);
  }
  render() {
    return (
      <Container>
        <User />
        <Navigation onMenuClick={this._handleMenuClick}/>
      </Container>
    )
  }
}
const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  appendSection: (sectionName) => dispatch(appendSection(sectionName))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);