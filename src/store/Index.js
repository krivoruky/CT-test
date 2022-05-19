import { configureStore } from '@reduxjs/toolkit';
import TodOReducer from './ToDoSlice';

export default configureStore({
  reducer: {
    todos: TodOReducer
  }
});
