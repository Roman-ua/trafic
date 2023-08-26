import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  user?: null
}

const initialState: UserState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    logout: () => initialState,
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer
