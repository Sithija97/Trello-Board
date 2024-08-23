import { apiSlice } from "./api-slice";

export const summaryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: () => `/api/summary`,
      providesTags: ["Summary"],
    }),
  }),
});

export const { useGetSummaryQuery } = summaryApiSlice;
