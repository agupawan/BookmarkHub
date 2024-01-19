import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1/bookmark' }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
      providesTags: ["Posts"],
    }),

    getBookmarks: builder.query({
        query: (category) => `?category=${category}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetBookmarksQuery } = jsonServerApi;