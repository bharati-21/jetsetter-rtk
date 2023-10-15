import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const itemsApi = createApi({
  reducerPath: 'items', // name of the slice
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => {
    return {
      getItems: builder.query<{ items: Item[] }, void>({
        query: () => 'items',
      }),
    };
  },
});

export const { useGetItemsQuery } = itemsApi;
