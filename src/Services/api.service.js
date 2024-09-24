// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./token.serivce";

export const ioService = createApi({
  reducerPath: "ioService",
  baseQuery: baseQuery,
  tagTypes: [
    "prePopulate",
    "getIO",
    "getKeyMerits",
    "getArtifactsVideo",
    "getInvestmentDocuments",
    "getIOById",
    "getSponser", 
    "getInvestmentType", 
    "getInvestmentTypeID"
  ],
  endpoints: (builder) => ({
    
    // =====[get prepopulate data]
    
    getIOprepopulateData: builder.query({
      query: () => `/io/admin/pre-populate`,
      providesTags: ["prePopulate"],
    }),


    getIOById: builder.query({
      query: (id) => ({ url: `/io/admin/${id}` }),
      providesTags: ["getIOById"],
    }),

    // =====[create]
    createIO: builder.mutation({
      query: (data) => ({
        url: `/io/admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getIO"],
    }),

    updateIO: builder.mutation({
      query: ({ data, id }) => ({
        url: `/io/admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["getIOById", "getIO", "prePopulate"],
    }),


    deleteKeyMerits: builder.mutation({
      query: (id) => ({
        url: `/io/admin/key-merits/hard-delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getIOById"],
    }),

  }),
});

// Export hooks for usage in functional components
export const {
  useGetIOprepopulateDataQuery,
  useGetIOByIdQuery,
  useCreateIOMutation,
  useUpdateIOMutation,
  useDeleteKeyMeritsMutation,
} = ioService;
