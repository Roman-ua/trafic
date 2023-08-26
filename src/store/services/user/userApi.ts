import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'url' }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<IUser[], void>({
      query() {
        return 'user'
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: 'User' as const,
                id,
              })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),
  }),
})

export const { usePrefetch, useGetUserQuery } = userApi
console.log(userApi, 'userApi')
type IUser = {
  id: string
  name: string
}
