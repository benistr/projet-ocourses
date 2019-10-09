import React from 'react';
import styled from 'styled-components';
import Task from './task';

const Contain = styled.div`
padding-top: 120px;
`;

const Container = styled.div`

  margin-top: 80px;
  // border: 1px solid lightgrey;
  border-radius: 12px;
  width: 68%;
  background-color: #FFF;
  box-shadow: 4px 4px 6px #D7D7D7;
  padding:1 rem;
  margin: 1rem auto;
  `;
const Title = styled.h3`
  padding: 8px;
  background-color: #F2F2F2;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: 'Open Sans';
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.2rem 0rem 0.2rem 0rem;
  `;
const TaskList = styled.div`
padding: 1rem;
font-family: 'Open Sans';
`;

export default class Column extends React.Component {
  render() {
    return (
      <Contain>
      <Container>
      
      <Title>{this.props.column.title}</Title>
      <TaskList>
      {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
      </TaskList>
      
      </Container>
      </Contain>
    );
}

}