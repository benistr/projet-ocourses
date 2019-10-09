import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  
  width: 80%;
  border-bottom: 1px solid #eeeded;
  padding: 0.4em;
  width: 100%;
  color: #B6B6B6;
  line-height: 1.5rem;
  `;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}