import { Grid, GridItem } from "components";
import { useSelector } from "react-redux";
import { getTodo } from 'redux/selector';
import { Todo } from "components";

export const TodoList = () => {

  const todos = useSelector(getTodo)

  return(
    <Grid>
              {todos.map((todo, index) => (
                  <GridItem key={todo.id}>
                    <Todo
                      id={todo.id}
                      text={todo.text}
                      counter={index + 1}
                    />
                  </GridItem>
                ))}
            </Grid>
  )
}