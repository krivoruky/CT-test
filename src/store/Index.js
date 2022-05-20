import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import TodOReducer from './TodoSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, TodOReducer);
export const store = configureStore({
  reducer: persistedReducer
});
export const persistor = persistStore(store);
