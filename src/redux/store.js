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

// // Persisting token field from auth slice to localstorage
const followPersistConfig = {
  key: 'follow',
  storage,
  whitelist: ['followed'],
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
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

// import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { userInfoReducer } from './UserInfo/userInfoSlice';

// const persistConfigForUserInfo = {
//   key: 'theme',
//   version: 2,
//   storage,
//   whitelist: ['theme', 'user', 'firstRender'],
// };

// export const store = configureStore({
//   reducer: {

//     userInfo: persistReducer(persistConfigForUserInfo, userInfoReducer),
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
