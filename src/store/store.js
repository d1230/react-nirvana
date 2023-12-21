import { combineReducers, configureStore } from "@reduxjs/toolkit";
import credentialReducer from "../features/slicer/credentialSlicer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // or another storage method
import { userApi } from "../services/useApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const persistConfig = {
  key: "root",
  storage,
  whitelist:['credential']
};
const rootReducer = combineReducers({
  [userApi.reducerPath]: userApi.reducer,
  credential: credentialReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
  // Add other reducers here if you have more
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(userApi.middleware),
  devTools: true,
});
setupListeners(store.dispatch);

// const store = configureStore({
//   reducer:{
//     credential: persistedReducer,
//     devTools: true,

//   }
// });

export const persistor = persistStore(store);
export default store;
