const { createSlice } = require('@reduxjs/toolkit');

let isUserAuthenticated = false;
if (typeof window !== 'undefined') {
  isUserAuthenticated = localStorage.getItem('user') ? true : false;
}
const global = createSlice({
  name: 'global',
  initialState: {
    isAuthenticated: isUserAuthenticated,
    user: [],
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUser } = global.actions;
export default global.reducer;
