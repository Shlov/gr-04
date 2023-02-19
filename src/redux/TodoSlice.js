import { createSlice } from "@reduxjs/toolkit";

const todosInitialState = {
    items: []
}

const todoSlice = createSlice({
  // Ім'я слайсу
  name: "todos",
  // Початковий стан редюсера слайсу
  initialState: todosInitialState,
  // Об'єкт редюсерів
  reducers: {
      addTodo(state, action) {
          state.items.push(action.payload)
          
    },
      deleteTodo(state, action) {
          state.items = state.items.filter((item) => item.id!== action.payload
              
          )

        
    },
    
  },
});

// Генератори екшенів
 export const { addTodo, deleteTodo} = todoSlice.actions;
// Редюсер слайсу
export const todoReducer = todoSlice.reducer;
