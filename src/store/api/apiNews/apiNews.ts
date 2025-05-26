import { NEWS_API_KEY, NEWS_BASE_URL } from '../../../data/data'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: NEWS_BASE_URL,
    }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getNews: builder.query({
            query: (pageSize = 10) =>
                `search?apiKey=${NEWS_API_KEY}&page_size=${pageSize}`,
        }),
    }),
})

export const { useGetNewsQuery } = apiSlice
