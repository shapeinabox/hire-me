import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import childrenReducer from "./features/ChildrenSlice";
import uiReducer from "./features/UISlice";

import ChildrenEpics from "./epics/ChildrenEpics";

const rootEpic: any = combineEpics(...ChildrenEpics);

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    children: childrenReducer,
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({ serializableCheck: false }).concat(
    epicMiddleware
  ),
});

epicMiddleware.run(rootEpic);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
