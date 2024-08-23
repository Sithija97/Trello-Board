import { apiSlice } from "./api-slice";

export const expensesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getExpenses: builder.query({
      query: () => `/api/expense`,
      providesTags: ["Expense"],
    }),
    getExpense: builder.query({
      query: ({ _id }) => `/api/expense/${_id}`,
      providesTags: ["Expense"],
    }),
    addNewExpense: builder.mutation({
      query: (expense) => ({
        url: `/api/expense`,
        method: "POST",
        body: expense,
      }),
      invalidatesTags: ["Expense"],
    }),
    updateExpense: builder.mutation({
      query: (expense) => ({
        url: `/api/expense/${expense._id}`,
        method: "PATCH",
        body: expense,
      }),
      invalidatesTags: ["Expense"],
    }),
    deleteExpense: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/expense/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Expense"],
    }),
  }),
});

export const {
  useGetExpensesQuery,
  useGetExpenseQuery,
  useAddNewExpenseMutation,
  useUpdateExpenseMutation,
  useDeleteExpenseMutation,
} = expensesApiSlice;
