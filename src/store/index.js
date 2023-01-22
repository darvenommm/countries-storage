import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [
    'theme',
  ],
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer,
);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
    ),
  ),
);

export const persistor = persistStore(store);
