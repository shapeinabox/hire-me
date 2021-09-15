import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IUIState {
  loading: boolean;
  error?: {
    code?: string | number;
    message?: string;
  };
}

const initialState: IUIState = {
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    toggleLoading: (state) => {
      state.loading = !state.loading;
    },
    setAppError: (
      state,
      action: PayloadAction<{ code?: string | number; message?: string }>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearAppError: (state) => {
      state.error = undefined;
    },
  },
});

export const { setLoading, toggleLoading, setAppError, clearAppError } =
  uiSlice.actions;

export default uiSlice.reducer;
