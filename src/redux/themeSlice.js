import { createSlice } from '@reduxjs/toolkit';
import themeEnum from '../enum/themeEnum'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 1,
  },
  reducers: {
    switchToDark: (state) => {
        state.value = themeEnum.dark
    },
    switchToLight: (state) => {
        state.value = themeEnum.light
    },
  },
})

// Action creators are generated for each case reducer function
export const { switchToDark,  switchToLight} = themeSlice.actions;

export default themeSlice.reducer