import { configureStore } from "@reduxjs/toolkit";
import { ukrFoods } from "./products/slice";
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
import { authReducer } from "./auth/slice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

// Persist configuration for ukrFood
const ukrFoodPersistConfig = {
  key: "ukrFood",
  version: 1,
  storage,
  whitelist: ["ukrFood", "pizzas", "sushi"], // Додайте ключі, які хочете зберігати
};
export const store = configureStore({
  reducer: {
    ukrFood: persistReducer(ukrFoodPersistConfig, ukrFoods),
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
