import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookieValue } from "../utils";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:9000",
  prepareHeaders: (headers) => {
    const token = getCookieValue("__session");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Income", "Expense", "Budget", "Summary"],
  endpoints: (builder) => ({}),
});
