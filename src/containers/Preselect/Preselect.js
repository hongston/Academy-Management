import React from 'react';
import { fromJS, List } from 'immutable';

import styles from './Preselect.scss';
import StudentPart from '@components/StudentPart/StudentPart';
import ClassPart from '@components/ClassPart/ClassPart';

const Container = (props) =>  <div className={styles.container}>{props.children}</div>;
class Preselect extends React.Component {
  constructor() {
    super();
    this.state = {
      studentInfo: fromJS({
        modalVisible: false
      }),
      classInfo: fromJS({
        modalVisible: false,
        lectureTime: List()
      })
    }
    this._handleUpdateState = this._handleUpdateState.bind(this);
    this._handleRegisterStudent = this._handleRegisterStudent.bind(this);
    this._handleRegisterClass = this._handleRegisterClass.bind(this);
    this._handleUpdateLectureTime = this._handleUpdateLectureTime.bind(this);
  }
  _handleUpdateState(select, path, data) {
    this.setState((state, props) => ({
      [select]: state[select].setIn(path, data)
    }));
  }
  _handleRegisterStudent() {
    this._handleUpdateState("studentInfo", ["modalVisible"], false);
  }
  _handleRegisterClass() {
    this._handleUpdateState("classInfo", ["modalVisible"], false);
  }
  //monday tuesday thursday wednesday friday saturday sunday
  _handleUpdateLectureTime(params) {
    const lectureTime = this.state.classInfo.get("lectureTime");
    if(params.mode=="add") {
      const newLectureTime = lectureTime.push(fromJS({
        day: "-1",
        startTime: "",
        endTime: "" 
      }))
      this.setState((state, props) => {
        return {
          classInfo: state.classInfo.set("lectureTime", newLectureTime)
        }
      })
    }
    else if(params.mode=="delete") {
      const newLectureTime = lectureTime.delete(params.index);
      this.setState((state, props) => {
        return {
          classInfo: state.classInfo.set("lectureTime", newLectureTime)
        }
      })
    }
  }
  render() {
    return (
      <Container>
        <StudentPart
          studentInfo={this.state.studentInfo}
          onUpdateState={this._handleUpdateState}
          onRegisterStudent={this._handleRegisterStudent}/>
        <ClassPart
          classInfo={this.state.classInfo}
          onUpdateState={this._handleUpdateState}
          onRegisterClass={this._handleRegisterClass}
          onUpdateLectureTime={this._handleUpdateLectureTime}/>
      </Container>
    )
  }
}

export default Preselect;