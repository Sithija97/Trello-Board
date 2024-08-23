import { apiSlice } from "./api-slice";

export const budgetsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBudgets: builder.query({
      query: () => `/api/budget`,
      providesTags: ["Budget"],
    }),
    getBudget: builder.query({
      query: ({ _id }) => `/api/budget/${_id}`,
      providesTags: ["Budget"],
    }),
    addNewBudget: builder.mutation({
      query: (budget) => ({
        url: `/api/budget`,
        method: "POST",
        body: budget,
      }),
      invalidatesTags: ["Budget"],
    }),
    updateBudget: builder.mutation({
      query: (budget) => ({
        url: `/api/budget/${budget._id}`,
        method: "PATCH",
        body: budget,
      }),
      invalidatesTags: ["Budget"],
    }),
    deleteBudget: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/budget/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Budget"],
    }),
  }),
});

export const {
  useGetBudgetsQuery,
  useGetBudgetQuery,
  useAddNewBudgetMutation,
  useUpdateBudgetMutation,
  useDeleteBudgetMutation,
} = budgetsApiSlice;
