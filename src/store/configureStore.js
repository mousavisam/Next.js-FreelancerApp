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
  import { configureStore } from "@reduxjs/toolkit";
  
  import { initialState as userInitialState } from "./reducers/userSlice";
  import { rootReducer } from "./reducers/rootReducer";
  import storage from "./storage";
  
  const getDefaultStates = () => ({
    user: userInitialState,
  });
  
  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
    blacklist: [],
  };
  
  const initializeStore = (preloadedState) =>
    configureStore({
      reducer: {
        reducer: persistReducer(persistConfig, rootReducer),
        preloadedState: preloadedState || getDefaultStates(),
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
    });
  
  export const store = initializeStore();
  export const persistor = persistStore(store);
  
  
  export default store;
  