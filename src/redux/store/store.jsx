import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { RootReducer } from '../reducer/root.reducer';
import { root } from '../saga/root.saga';

const sagaMiddleware = createSagaMiddleware();



 const store = configureStore({
    reducer: RootReducer,
    middleware: (middleware) => middleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ['your/action/type'],
          // Ignore these field paths in all actions
          ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          // Ignore these paths in the state
          ignoredPaths: ['items.dates'],
        },
      }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production" ? true : false
})

sagaMiddleware.run(root)

export default store