import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonServerApi = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
      providesTags: ["Posts"],
    }),

    getBookmarks: builder.query({
        query: (category) => `category/bookmark/find?category=${category}`,
    }),

    getLatestBookmarks: builder.query({
      query: (category) => `category/bookmark/latest?category=${category}`,
    })
  }),
});

export const { useGetCategoriesQuery, useGetBookmarksQuery, useGetLatestBookmarksQuery } = jsonServerApi;