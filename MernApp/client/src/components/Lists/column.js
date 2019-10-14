import React from 'react';
import styled from 'styled-components';
import Task from './task';
import { Droppable, Draggable } from 'react-beautiful-dnd';



const Contain = styled.div`
width: 68%;
margin: 1rem auto;

`;

const Container = styled.div`

  margin-top: 20px;
  border-radius: 12px;
  background-color: #FFF;
  box-shadow: 4px 4px 6px #D7D7D7;
  padding:1 rem;

  display: flex;
  flex-direction: column;

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
flex-grow: 1;
min-height: 50px;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Contain>

      <Draggable draggableId={this.props.column.id} index={this.props.index}>
      {(provided) => (
      <Container {...provided.draggableProps} ref={provided.innerRef}>
        <Title {...provided.dragHandleProps}>{
          this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id} type="task">
        {(provided) => (
        <TaskList 
          ref={provided.innerRef} 
          {...provided.droppableProps}
          >
          {this.props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index}/>
          ))}
          {provided.placeholder}
        </TaskList>
        )}
      </Droppable>
      </Container>
      )}
      </Draggable>
      </Contain>
    );
}

}