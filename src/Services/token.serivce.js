import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// Define a base query function with token refresh logic

console.log(import.meta.env.VITE_BASE_URL);
export const baseQuery = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      const username = import.meta.env.VITE_USERNAME || 'defaultUsername';
      const password = import.meta.env.VITE_PASSWORD || 'defaultPassword';

      // Encode credentials to Base64
      const basicAuth = btoa(`${username}:${password}`);
      
      // Set the Authorization header
      headers.set('Authorization', `Basic ${basicAuth}`);
      
      // Set the token if available
      if (token) {
        headers.set("access-token", token);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Handle token refresh
    // const refreshToken = localStorage.getItem("refreshToken");
    // if (refreshToken) {
    //   try {
    //     const refreshResult = await fetchBaseQuery({
    //       baseUrl: import.meta.env.VITE_BASE_URL,
    //     })(
    //       {
    //         url: "/auth/user/regenerate-token",
    //         method: "POST",
    //         body: { refreshToken },
    //       },
    //       api,
    //       extraOptions
    //     );

    //     if (refreshResult.data) {
    //       // Save new tokens
    //       localStorage.setItem("accessToken", refreshResult.data.access.token);
    //       localStorage.setItem("refreshToken", refreshResult.data.refresh.token);
    //       localStorage.setItem("refreshTokenExp", refreshResult.data.refresh.expires);

    //       // Retry the original request with the new token
    //       result = await fetchBaseQuery({
    //         baseUrl: import.meta.env.VITE_BASE_URL,
    //         prepareHeaders: (headers) => {
    //           const newToken = localStorage.getItem("accessToken");
              
    //           // Set the Authorization header again
    //           headers.set('Authorization', `Basic ${basicAuth}`);
              
    //           // Set the new token
    //           if (newToken) {
    //             headers.set("x-auth-token", newToken);
    //           }
    //           return headers;
    //         },
    //       })(args, api, extraOptions);
    //     }
    //   } catch (err) {
    //     console.error("Failed to refresh token:", err);
    //     // Handle refresh failure (e.g., redirect to login)
    //   }
    // }
    const [ logout ] = useLogoutMutation()
    const res = await logout()
    console.log(res);
    // Remove token and authenticated status from storage and cookies
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    Cookies.remove("isAuthenticated", { path: '/login' });






  }

  return result;
};

// Create an RTK Query API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data?.data['access-token']);
          // Store tokens in local storage
          localStorage.setItem("accessToken", data?.data['access-token']);
          localStorage.setItem("refreshToken", data?.data?.refresh?.token);
          localStorage.setItem("accessTokenExp", data?.data?.access?.expires);
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),


    logout: builder.mutation({
      query: (credentials) => ({
        url: "/logout",
        method: "POST",
      }),
    }),

    
    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/user/regenerate-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),
    // Add more endpoints as needed
  }),
});

export const { useLoginMutation, useRefreshTokenMutation, useLogoutMutation } = apiSlice;

export default apiSlice;
