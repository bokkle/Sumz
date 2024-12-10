import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
  reducerPath: 'articleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      if (!rapidApiKey) {
        throw new Error('RapidAPI key is missing');
      }
      headers.set('x-rapidapi-key', rapidApiKey);
      headers.set(
        'x-rapidapi-host',
        'article-extractor-and-summarizer.p.rapidapi.com',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: ({ articleUrl }) => {
        if (!articleUrl) {
          throw new Error('Article URL is missing');
        }
        return `/summarize?url=${encodeURIComponent(articleUrl)}&length=3`;
      },
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleApi;
