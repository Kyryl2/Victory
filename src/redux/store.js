import { configureStore } from "@reduxjs/toolkit";
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
import { cartReducer } from "./order/slice";
import { authReducer } from "./auth/slice";
import { productReducer } from "./products/slice";

// Персистор конфігурація для авторизації
const persistConfigAuth = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"],
};

const persistConfigCart = {
  key: "cart",
  version: 1,
  storage,
};

const persistConfigProducts = {
  key: "products",
  version: 1,
  storage,
  whitelist: ["ukrFood", "pizzas", "sushi"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfigAuth, authReducer),

    ukrFood: persistReducer(persistConfigProducts, productReducer),
    cart: persistReducer(persistConfigCart, cartReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
