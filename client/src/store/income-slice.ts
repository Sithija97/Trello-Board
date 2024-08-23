import { apiSlice } from "./api-slice";

export const incomesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getIncomes: builder.query({
      query: () => `/api/income`,
      providesTags: ["Income"],
    }),
    getIncome: builder.query({
      query: ({ _id }) => `/api/income/${_id}`,
      providesTags: ["Income"],
    }),
    addNewIncome: builder.mutation({
      query: (income) => ({
        url: `/api/income`,
        method: "POST",
        body: income,
      }),
      invalidatesTags: ["Income"],
    }),
    updateIncome: builder.mutation({
      query: (income) => ({
        url: `/api/income/${income._id}`,
        method: "PATCH",
        body: income,
      }),
      invalidatesTags: ["Income"],
    }),
    deleteIncome: builder.mutation({
      query: ({ _id }) => ({
        url: `/api/income/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Income"],
    }),
  }),
});

export const {
  useGetIncomesQuery,
  useGetIncomeQuery,
  useAddNewIncomeMutation,
  useUpdateIncomeMutation,
  useDeleteIncomeMutation,
} = incomesApiSlice;
