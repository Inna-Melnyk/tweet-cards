import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { usersReducer } from './usersSlice';
import { followReducer } from './followed/followSlice';

const followPersistConfig = {
  key: 'follow',
  storage,
  whitelist: ['followed'],
};

const usersPersistConfig = {
  key: 'users',
  storage: storage,
  whitelist: ['usersAll'],
};

export const store = configureStore({
  reducer: {
    users: persistReducer(usersPersistConfig, usersReducer),
    follow: persistReducer(followPersistConfig, followReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
