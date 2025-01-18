import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  id: number;
  fullname: string;
  email: string;
  username: string;
  profilePicture: string;
  token: string;
}

const initialState: UserState = {
  id: 0,
  fullname: "",
  email: "",
  username: "",
  token: "",
  profilePicture: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.fullname = action.payload.fullname;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.profilePicture = action.payload.profilePicture;
    },
    logoutAction: (state) => {
      state.id = 0;
      state.fullname = "";
      state.email = "";
      state.username = "";
      state.token = "";
      state.profilePicture = "";
    },
    updateUserAction: (state, action: PayloadAction<Partial<UserState>>) => {
      const { id, fullname, email, username, profilePicture, token } = action.payload;
      if (id !== undefined) state.id = id;
      if (fullname !== undefined) state.fullname = fullname;
      if (email !== undefined) state.email = email;
      if (username !== undefined) state.username = username;
      if (profilePicture !== undefined) state.profilePicture = profilePicture;
      if (token !== undefined) state.token = token;
    },
  },
});

export const { loginAction, logoutAction, updateUserAction } = userSlice.actions;
export default userSlice.reducer;
