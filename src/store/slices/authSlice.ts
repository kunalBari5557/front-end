// store/slices/authSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  user: string | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

// Thunks for login and signup
export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }, thunkAPI) => {
    console.log("api funcation calling")
    try {
      const response = await axios.post('/api/login', { username, password });
      return response.data.user;
    } catch (error) {
      let errorMessage = 'An error occurred';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const signupAsync = createAsyncThunk(
  'auth/signup',
  async ({ username, password }: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post('/api/signup', { username, password });
      return response.data.user;
    } catch (error) {
      let errorMessage = 'An error occurred';
      if (axios.isAxiosError(error) && error.response) {
        errorMessage = error.response.data.message;
      }
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action: PayloadAction<string>) => {
        console.log("fulfilled", state)
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        console.log("rejected", state)
        state.isAuthenticated = false;
        state.error = action.payload as string;
      })
      .addCase(signupAsync.fulfilled, (state, action: PayloadAction<string>) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signupAsync.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
