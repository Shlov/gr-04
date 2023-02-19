import { useSelector } from 'react-redux';
import { getTodo } from 'redux/selector';

import {
  Container,
  Header,
  SearchForm,
  Section,
  Text,
} from 'components';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {

const todos = useSelector(getTodo)

  return (
    <>
        <Header />
        <Section>
          <Container>
            <SearchForm />
            
            {todos.length === 0 ?
              <Text textAlign="center">There are no any todos ... </Text> 
              : <TodoList/>
            }
          </Container>
        </Section>
      </>
  )
}
