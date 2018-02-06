import React from 'react';
import { Button, Icon } from 'antd';

import styles from './PageTitle.scss';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Title = (props) => <div className={styles.title}>{props.children}</div>;
const PageTitle = (props) => {
  return (
    <Container>
      <Title>
        {props.children}
        <Button
          className={styles.closeBtn}
          onClick={props.onCloseClick}>
          <Icon type="close" />
        </Button>
      </Title>
    </Container>
  )
}
export default PageTitle;