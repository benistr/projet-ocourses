import React from 'react';
import styled from 'styled-components';
import Task from './task';

const Container = styled.div`
  //margin-top: 120px;
  // padding-top: 200px;
  margin: 80px;
  // border: 1px solid lightgrey;
  border-radius: 12px;
  width: 68%;
  background-color: #FFF;
  box-shadow: 4px 4px 6px #D7D7D7;

  // margin: 0 auto;
  `;
const Title = styled.h3`
  padding: 8px;
  `;
const TaskList = styled.div`
padding: 8px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
      <Title>{this.props.column.title}</Title>
      <TaskList>
      {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
      </TaskList>
      </Container>
    );
}

}