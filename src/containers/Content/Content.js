import React from 'react';
import { connect } from 'react-redux';

import styles from './Content.scss';
import Section from '@components/Section/Section';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
class Content extends React.Component {
  render() {
    return (
      <Container>
        <Section section={this.props.section1}/>
        <Section section={this.props.section2}/>
        <Section section={this.props.section3}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  section1: state.section.get("section1"),
  section2: state.section.get("section2"),
  section3: state.section.get("section3")
})
export default connect(mapStateToProps)(Content);