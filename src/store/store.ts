import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import userReducer from "./userReducer";

// Configure the persist settings
const persistConfig = {
  key: "root", // The key used in localStorage
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
