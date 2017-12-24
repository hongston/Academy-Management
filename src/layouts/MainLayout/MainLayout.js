import React from 'react';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
class MainLayout extends React.Component {
  render() {
    return (
      <Container>
      </Container>
    )
  }
}

export default MainLayout;