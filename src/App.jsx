import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import styled from 'styled-components';
import CurrentToDo from './CurrentToDo';
import DoneToDo from './DoneToDo';

const DateButton = styled.button`
  color: rgb(65, 58, 57);
  border: 0.5px solid rgb(65, 58, 57);
  border-radius: 50%;
  background-color: transparent;
  width: 30px;
  height: 30px;
  margin: 3px;
  text-align: center;
`;

const DateLine = styled.div`
  display: flex;
  align-items: center;
`;

const Link = styled.span`
  color: rgb(65, 58, 57);
  font-family: 'Marmelad';
  cursor: pointer;
  color: rgb(65, 58, 57);
  margin: 0 8px;
  border-bottom: ${({ selected }) =>
    selected ? '2px solid rgb(65, 58, 57)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 40px 0 15px;
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      nextId: 0,
      date: moment(),
      navSelected: 'current',
      todos: []
    };
  }

  handleSubmitToDo = (todo, category) => {
    const { date: TodayDate, todos} = this.state;
    this.setState({
      nextId: this.state.nextId + 1,
    })

    const newTodo = {
      id: this.state.nextId,
      date: TodayDate.format('DD.MM.YYYY'),
      category: category,
      todo: todo,
      isCompleted: false,
    };

    toggleTodo = (todo) => {
      this.setState({
        todos: [...this.state.todos, {
          id: todo.id,
          todo: todo.todo,
          isCompleted: !todo.isCompleted,
          category: todo.category,
        }]
      })
    }

    const newTodos = [...todos, newTodo];

    newTodos.sort((a, b) => {
      const aDate = moment(a.date, 'DD.MM.YYYY');
      const bDate = moment(b.date, 'DD.MM.YYYY');
      return aDate.isAfter(bDate);
    });

    console.log(newTodos)

    this.setState({ todos: newTodos });
  }

  handleAddDay = () => {
    this.setState({ date: this.state.date.add(1, 'day') });
  }

  handleSubstractDay = () => {
    this.setState({ date: this.state.date.subtract(1, 'day') });
  }

  handleNavClick = event => {
    this.setState({ navSelected: event.target.getAttribute('name') });
  }

  render() {
    const { date, navSelected } = this.state;

    return (
      <section>
        <header>
          <h1>ToDo List</h1>
          <div className="container">
            <DateLine>
              <p id='currentDate'>Date: {date.format('DD.MM.YYYY')}</p>
              <DateButton onClick={this.handleSubstractDay}><i className="fa fa-minus" aria-hidden="true"></i></DateButton>
              <DateButton onClick={this.handleAddDay}>
                <i className="fa fa-plus" aria-hidden="true"></i>
              </DateButton>
            </DateLine>
          </div>
          <main className="container-fluid">
            <Nav>
              <Link
                name='current'
                onClick={this.handleNavClick}
                selected={navSelected === 'current'}
              > Current Todos
              </Link>
              <Link
                name='done'
                onClick={this.handleNavClick}
                selected={navSelected === 'done'}
              > Done Todos
              </Link>
            </Nav>
            {navSelected === 'current' ? <CurrentToDo onSubmit={this.handleSubmitToDo} /> : <DoneToDo />}
          </main>
        </header>
      </section>
    );
  }
}


export default App;
