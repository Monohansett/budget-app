import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Table = styled.table`
  display: flex;
  text-align: right;
`
const Thead = styled.thead`

`

const Row = styled.td`

`
const Column = styled.th`

`

class DoneToDo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            todo: null,
            category: null,
        };
    }

    render() {
        return <div />;
    }
}



export default DoneToDo;