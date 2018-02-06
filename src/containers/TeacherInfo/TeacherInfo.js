import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import styles from './TeacherInfo.scss';
import Title from '@components/PageTitle/PageTitle';
import { closeSection } from '@redux/actions/sectionActions';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const Content = (props) => <div className={styles.Content}>{props.children}</div>;

/* 타이틀 컴포넌트에 강사 선택 창, 강사 추가 버튼 필요 */
class TeacherInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title onCloseClick={this.props.onCloseClick}>강사정보</Title> 
        <Form>
          <FormItem>
            <Text>이름</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>생년월일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>연락처</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>이메일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>입사일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>추가연락처</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>메모</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>주소</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>직위</Text>
            <Content>
            </Content>
          </FormItem>
        </Form>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  onCloseClick: () => dispatch(closeSection("강사정보"))
})
export default connect(null, mapDispatchToProps)(TeacherInfo);