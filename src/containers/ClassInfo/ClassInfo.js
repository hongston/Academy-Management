import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import styles from './ClassInfo.scss';
import Title from '@components/PageTitle/PageTitle';
import { closeSection } from '@redux/actions/sectionActions';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const Content = (props) => <div className={styles.Content}>{props.children}</div>;

/*  */
class ClassInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title onCloseClick={this.props.onCloseClick}>강좌정보</Title> 
        <Form>
          <FormItem>
            <Text>강좌</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>강사</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>월수강료</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>교재</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>강좌등록일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>개강일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>종강일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>진도</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>수업시간</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>수업시간</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>수강생명단</Text>
            <Content>
            </Content>
          </FormItem>
        </Form>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  onCloseClick: () => dispatch(closeSection("강좌정보"))
})
export default connect(null, mapDispatchToProps)(ClassInfo);