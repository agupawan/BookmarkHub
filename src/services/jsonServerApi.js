import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:2800/' }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
      providesTags: ["Posts"],
    }),

    getBookmarks: builder.query({
        query: (id) => `categories/${id}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetBookmarksQuery } = jsonServerApi;