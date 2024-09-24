// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./token.serivce";

export const profile = createApi({
    reducerPath: "profile",
    baseQuery: baseQuery,
    tagTypes: [
        "getProfile"
    ],
    endpoints: (builder) => ({


        // =====[send otp]
        sendOtp: builder.mutation({
            query: (data) => ({
                url: `/send_otp`,
                method: "POST",
                body: data,
            }),
        }),


        // =====[get interest]
        getProfile: builder.query({
            query: () => `/fetch-profile`,
            providesTags: ["getProfile"],
        }),












    }),
});

// Export hooks for usage in functional components
export const {

    useSendOtpMutation,
    useGetProfileQuery,

} = profile;
