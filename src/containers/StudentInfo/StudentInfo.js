import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import styles from './StudentInfo.scss';
import Title from '@components/PageTitle/PageTitle';
import { closeSection } from '@redux/actions/sectionActions';

const Container = (props) => <div className={styles.container}>{props.children}</div>;
const Form = (props) => <div className={styles.form}>{props.children}</div>;
const FormItem = (props) => <div className={styles.formItem}>{props.children}</div>;
const Text = (props) => <div className={styles.text}>{props.children}</div>;
const Content = (props) => <div className={styles.Content}>{props.children}</div>;

class StudentInfo extends React.Component {
  render() {
    return (
      <Container>
        <Title onCloseClick={this.props.onCloseClick}>학생정보</Title>
        <Form>
          <FormItem>
            <Text>이름</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>학부모</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>학부모번호</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>학년</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>학교</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>학생번호</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>생년월일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>상태</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>등록일</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>추가연락처</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>재원형제</Text>
            <Content>
            </Content>
          </FormItem>
          <FormItem>
            <Text>특이사항</Text>
            <Content>
            </Content>
          </FormItem>
        </Form>
      </Container>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  onCloseClick: () => dispatch(closeSection("학생정보"))
})
export default connect(null, mapDispatchToProps)(StudentInfo);