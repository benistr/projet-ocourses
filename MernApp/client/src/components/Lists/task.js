import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 80px;
  border-bottom: 1px solid lightgrey;
  width: 68%;
  background-color: #FFF;

  `;

export default class Task extends React.Component {
  render() {
    return <Container>{this.props.task.content}</Container>;
  }
}