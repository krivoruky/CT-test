import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todos',
  initialState: {
    todo: [
      { id: 1, time: 1653965059000, title: 'машина', description: 'поменять сайлентблоки' },
      { id: 2, time: 1652934059000, title: 'велосипед', description: 'поставить детское кресло' },
      { id: 3, time: 1622965059000, title: 'дом', description: 'установить кондиционер' },
      { id: 4, time: 1652465059000, title: 'дом', description: 'пропылесосить' }
    ]
  },
  reducers: {
    addToDo(state, action) {
      state.todos.push({
        id: action.payload.text,
        time: action.payload.text,
        title: action.payload.text,
        description: action.payload.text
      });
    },
    deleteTodo(state, action) {},
    clear(state, action) {}
  }
});

export const { addToDo, deleteTodo, clear } = todoSlise.actions;

export default todoSlise.reducer;
