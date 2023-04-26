import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducers
import cartReducer from "./cartSlice";

// Persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Config Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

//Combine All Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Persist The Reducers
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Store

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
