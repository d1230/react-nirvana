import { configureStore } from '@reduxjs/toolkit';
import credentialReducer from '../features/slicer/credentialSlicer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // or another storage method

const persistConfig = {
  key: 'root',
  storage,
  // You can also whitelist specific reducers to be persisted
  // whitelist: ['credential'],
};

const persistedReducer = persistReducer(persistConfig,  credentialReducer,
  // Add other reducers here if you have more
);

const store = configureStore({
  reducer:{
    credential: persistedReducer,
    devTools: true
  } 
});

//const persistor = persistStore(store);

// export default {store, persistor };
export const persistor = persistStore(store)
export default store;