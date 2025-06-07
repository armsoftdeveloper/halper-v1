import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchNavbarLinks = createAsyncThunk(
  'navbar/fetchLinks',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    await res.json();
    return [
      { to: "/solutions", label: "Solutions" },
      { to: "/services", label: "Services" },
      { to: "/partners", label: "Partners" },
      { to: "/prices", label: "Prices" },
      { to: "/resources", label: "Resources" },
      { to: "/aboutus", label: "About Us" },
    ];
  }
);

const initialState = {
  links: [
    { to: "/solutions", label: "Solutions" },
    { to: "/services", label: "Services" },
    { to: "/partners", label: "Partners" },
    { to: "/prices", label: "Prices" },
    { to: "/resources", label: "Resources" },
    { to: "/aboutus", label: "About Us" },
  ],
  status: 'idle',
  error: null,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setNavbarLinks: (state, action) => {
      state.links = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarLinks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNavbarLinks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.links = action.payload;
      })
      .addCase(fetchNavbarLinks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setNavbarLinks } = navbarSlice.actions;
export default navbarSlice.reducer;
