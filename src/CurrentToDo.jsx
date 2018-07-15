import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.article`
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const InputLine = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1.5;
`;
const Input = styled.input`
  font-family: 'Marmelad';
  font-size: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgb(65, 58, 57);
  margin-left: 5px;
  color: rgb(65, 58, 57);
  width: 100%;
  padding: 0;
  margin: 0;
`;
const LineTitle = styled.dt`
  width: 150px;
  color: rgb(65, 58, 57);
`;
const LineInput = styled.dd`
  width: 150px;
  margin: 0;
  color: rgb(65, 58, 57);
`;
const Button = styled.button`
  font-family: 'Marmelad';
  color: rgb(65, 58, 57);
  border: 1px solid rgb(65, 58, 57);
  border-radius: 31px;
  background-color: transparent;
  margin: 3px;
  cursor: pointer;
  text-align: center;
  padding: 5px 20px;
`;

class CurrentToDo extends Component {
    state = {
      todo: null,
      category: null
    }
    
    handleChangeInput = event => {
      this.setState({[event.target.name]: event.target.value});
    }

    handleEnter = () => {
      const { onSubmit } = this.props;
      const { todo, category } = this.state;

      onSubmit(todo, category);
      this.setState({ todo: null, category: null });
    }

    render() {
      const {todo, category} = this.state;
        return (
          <Container>
            <dl>
              <InputLine>
                <LineTitle>Type ToDo</LineTitle>
                  <LineInput>
                  <Input name="todo"
                  onChange={this.handleChangeInput}
                  value={todo || ''}
                  >
                  </Input>
                  </LineInput>
              </InputLine>
              <InputLine>
                <LineTitle>Category</LineTitle>
                  <LineInput>
                    <Input name="category"
                      onChange={this.handleChangeInput}
                      value={category || ''}
                    >
                    </Input>
                  </LineInput>
              </InputLine>
            </dl>
            <Button onClick={this.handleEnter}>Add ToDo</Button>
          </Container>
        )
    }
}



export default CurrentToDo;