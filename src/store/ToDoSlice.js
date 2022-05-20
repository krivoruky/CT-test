import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todo',
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
      state.todo.push({
        id: action.payload.id,
        time: action.payload.time,
        title: action.payload.title,
        description: action.payload.description
      });
    },
    deleteTodo(state, action) {
      const filter = state.todo.filter(t => t.id !== action.payload.id);
      state.todo.length = 0;
      state.todo.push(...filter);
    },
    clear(state) {
      state.todo.length = 0;
    }
  }
});

export const { addToDo, deleteTodo, clear } = todoSlise.actions;

export default todoSlise.reducer;
