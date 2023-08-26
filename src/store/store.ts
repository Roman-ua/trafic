import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/user/userSlice.ts'
import { userApi } from './services/user/userApi.ts'

export const store = configureStore({
  reducer: {
    userState: userSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([userApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
