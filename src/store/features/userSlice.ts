import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  image: string;
}

const initialState: UserState = {
  name: "Subhash",
  image: "", // default value
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
      // update both at once if needed
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    clearUser: (state) => {
      state.name = "";
      state.image = "";
    },
  },
});

export const { setName, setImage, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
