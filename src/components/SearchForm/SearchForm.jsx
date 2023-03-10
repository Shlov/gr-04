import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from 'redux/TodoSlice';
import { nanoid } from 'nanoid';
import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { getTodo } from 'redux/selector';

export const SearchForm = () => {
  const dispatch = useDispatch()

  const todos = useSelector(getTodo)

  const [query, setQuery] = useState('')

  const handleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {

    e.preventDefault();
    const todo = {
      id: nanoid(),
      text: query,
    };

    const isExist = todos.find(
      item => item.text.toLowerCase() === query.toLowerCase()
    )
    if (isExist) {
      alert(`${query} is already in todos`);
      return;
    }

    dispatch(addTodo(todo));

    setQuery('')

  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={query}
        autoFocus
      />
    </SearchFormStyled>
  );

}

// export class SearchForm extends Component {
  // state = {
  //   query: '',
  // };

  // handleInput = e => {
  //   this.setState({
  //     query: e.currentTarget.value,
  //   });
  // };

  // handleSubmit = e => {
  //   const { query } = this.state;

  //   e.preventDefault();

  //   this.props.onSubmit(query);

  //   this.setState({
  //     query: '',
  //   });
  // };
  // render() {
  //   const { query } = this.state;

    // return (
    //   <SearchFormStyled onSubmit={handleSubmit}>
    //     <FormBtn type="submit">
    //       <FiSearch size="16px" />
    //     </FormBtn>
    //     <InputSearch
    //       onChange={handleInput}
    //       placeholder="What do you want to write?"
    //       name="search"
    //       required
    //       value={query}
    //       autoFocus
    //     />
    //   </SearchFormStyled>
    // );
//   }
// }
