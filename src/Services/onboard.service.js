// io.service.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./token.serivce";

export const onBoard = createApi({
  reducerPath: "onBoard",
  baseQuery: baseQuery,
  tagTypes: [
    "interest",
    "fetchComunities"
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


    // =====[verifiy otp]
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: `/verify_otp`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[add profile]
    addProfile: builder.mutation({
      query: (data) => ({
        url: `/add_profile`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[get interest]
    getInterest: builder.query({
      query: () => `/fetch-interests`,
      providesTags: ["interest"],
    }),



    // =====[selected Interest]
    selectedInterest: builder.mutation({
      query: (data) => ({
        url: `/select-interests`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[forgot password]
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),



    // =====[forgot password]
    forgotPasswordVerifyOtp: builder.mutation({
      query: (data) => ({
        url: `/forgot-password/verify-otp`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[Reset password]
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/reset-password`,
        method: "POST",
        body: data,
      }),
    }),



    // =====[fetch Comunities]
    fetchComunities: builder.query({
      query: () => `/fetch-communities`,
      providesTags: ["fetchComunities"],
    }),




    // =====[select Communnity]
    selectCommunnity: builder.mutation({
      query: (data) => ({
        url: `/select-communities`,
        method: "POST",
        body: data,
      }),
    }),

    // =====[ /tell-us-about-your-business ]
    tellUsAboutYourBussiness: builder.mutation({
      query: (data) => ({
        url: `/tell-us-about-your-business`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[fetch Groups]
    fetchGroups: builder.query({
      query: () => `/fetch-groups`,
      providesTags: ["fetchGroups"],
    }),



    // =====[select Groups]
    selectGroups: builder.mutation({
      query: (data) => ({
        url: `/select-groups`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[ bussines-profile stepper form ] 
    updateBussinessStepperForm: builder.mutation({
      query: (data) => ({
        url: `/update-business-profile-step-1`,
        method: "POST",
        body: data,
      }),
    }),


    searchGroups: builder.query({
      query: (searchData) => `search-group?search_data=${searchData}`,
    }),


    searchCommunity: builder.query({
      query: (searchData) => `search-community?search_data=${searchData}`,
    }),



    // =====[Google Login]
    googleLogin: builder.mutation({
      query: (data) => ({
        url: `/sign-in-with-google-login`,
        method: "POST",
        body: data,
      }),
    }),


    // =====[Update user Account type]
    updateUserAccountType: builder.mutation({
      query: (data) => ({
        url: `/update-user-account-type`,
        method: "POST",
        body: data,
      }),
    }),













  }),
});

// Export hooks for usage in functional components
export const {




  useSendOtpMutation,
  useVerifyOtpMutation,
  useAddProfileMutation,
  useGetInterestQuery,
  useSelectedInterestMutation,
  useForgotPasswordMutation,
  useForgotPasswordVerifyOtpMutation,
  useResetPasswordMutation,
  useFetchComunitiesQuery,
  useSelectCommunnityMutation,
  useTellUsAboutYourBussinessMutation,
  useFetchGroupsQuery,
  useSelectGroupsMutation,
  useUpdateBussinessStepperFormMutation,
  useSearchGroupsQuery,
  useSearchCommunityQuery,
  useGoogleLoginMutation,
  useUpdateUserAccountTypeMutation




} = onBoard;
