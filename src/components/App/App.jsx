// import { useEffect, useState } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { getTodo } from 'redux/selector';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';

export const App = () => {
  // const [todos, setTodos] = useState(()=> JSON.parse(localStorage.getItem('todos')) || [])
  
  // useEffect(()=>{
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // },[todos])

  // const addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos(state => [...state, todo]);
  // };

  const handleSubmit = data => {
    // addTodo(data);
  };

  const deleteTodo = id => {
    // setTodos(state => ( state.filter(todo => todo.id !== id) ));
  }
const todos = useSelector(getTodo)
  return (
    <>
        <Header />
        <Section>
          <Container>
            <SearchForm onSubmit={handleSubmit} />

            {todos.length === 0 && (
              <Text textAlign="center">There are no any todos ... </Text>
            )}

            <Grid>
              {todos.length > 0 &&
                todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                      onClick={deleteTodo}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        </Section>
      </>
  )
}
