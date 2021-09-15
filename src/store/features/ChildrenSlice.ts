import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Child } from "../../types/types";

// Define a type for the slice state
interface ChildrenState {
  children: Child[]
}

const initialState: ChildrenState = {
    children: [],
};

export const childrenSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setChildren: (state, action: PayloadAction<any[]>) => {
      state.children = action.payload;
    },
    updateChild: (state, action: PayloadAction<{childId: string, time: string, action: "checkins" | "checkout"}>) => {
      const {childId, time, action: checkAction} = action.payload;
      const findIdx = state.children.findIndex(child => child.childId ===childId);
      if(checkAction === "checkins"){
        state.children[findIdx].checkedIn = true;
        state.children[findIdx].checkinTime = time;
      } else {
        state.children[findIdx].checkedIn = false;
        state.children[findIdx].pickupTime = time;
      }
    }
  },
});

export const {setChildren, updateChild } = childrenSlice.actions;

export default childrenSlice.reducer;

// Async Actions
export const CHILDREN_FETCH = "childrenSlice/FETCH";

export function fetchChildren() {
  return {
    type: CHILDREN_FETCH,
  };
}

export const CHILDREN_CHECK = "childrenSlice/CHECK";

export function checkChild(childId: string, time: string, action: "checkins" | "checkout") {
  return {
    type: CHILDREN_CHECK,
    payload: {childId, time, action}
  };
}