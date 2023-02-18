import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://crypto-news11.p.rapidapi.com"
const cryptoNewsApiHeaders =  {
    'X-RapidAPI-Key': 'b2cf614460mshcdca2b4790ab5dap1b68adjsn25caed7497a1',
    'X-RapidAPI-Host': 'crypto-news11.p.rapidapi.com'
  }

const createRequest = (url)=> ({url, headers: cryptoNewsApiHeaders})


export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({category,count}) => createRequest(`/cryptonews/${category}?max_articles=${count}`),
    }),
    getCryptoTweets: builder.query({
      query: ({count}) => createRequest(`/cryptotweets?max_tweets=${count}`),
    }),
  }),
})


export const { useGetCryptoNewsQuery, useGetCryptoTweetsQuery } = cryptoNewsApi