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

// const persistConfig = {
//   key: "auth",
//   version: 1,
//   store,
//   whitelist: ["token"],
// };

export const store = configureStore({
  reducer: {
    ukrFood: ukrFoods,
    // auth: persistReducer(persistConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
