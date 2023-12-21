import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nirana-backend.onrender.com",
    prepareHeaders: (headers, { getState }) => {
      // Get the authentication token
      //const token = getAuthToken();
      console.log(getState().credential.token);
      // If a token is available, include it in the headers
       const token = getState().credential.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({

    getusers: builder.query({
      query: () => `/api/users`,
      providesTags: ["users-query"],
    }),
    getuser: builder.query({
        query: (id) => ({
            url: `/api/users/${id}`,
            method: "GET",
          }),
          invalidatesTags: ["user-query"],
      }),
    signup: builder.mutation({
      query: (data) => ({
        url: `/api/auth/signup`,
        method: "POST",
        body: data,
      }),
      providesTags: ["signup-user"],
    }),
    signin: builder.mutation({
      query: (data) => ({
        url: "/api/auth/signin",
        method: "POST",
        body: data,
      }),
      providesTags: ["signin-user"],
    }),
    signout: builder.mutation({
      query: (data) => ({
        url: `/api/auth/signout`,
        method: "POST",
        body: data,
      }),
      providesTags: ["signout-user"],
    }),
    deleteuser: builder.mutation({
        query: (id) => ({
          url: `/api/users/${id}`,
          method: "DELETE",
        }),
        providesTags: ["del-user"],invalidatesTags: ["users-query"],
        
      }),
      getResumes: builder.query({
        query: () => ({
          url: `/api/resumes`,
          method: "GET",
        }),
        providesTags: ["get-resumes"],
        
      }),
      postResume: builder.mutation({
        query: (data) => ({
          url: `/api/resume`,
          method: "POST",
            body: data,
        }),
        providesTags: ["post-resume"],
        
      }),
      patchUser: builder.mutation({
        query: (id,data) => ({
          url: `/api/users/${id}`,
          method: "PATCH",
            body: data,
        }),
        providesTags: ["patch-user"],invalidatesTags: ["users-query"],
        
      }),
  }),
});
export const {
useGetusersQuery,
useGetuserQuery,
  useSignupMutation,
  useSigninMutation,
  useSignoutMutation,
  useDeleteuserMutation,
  useGetResumesQuery,
  usePostResumeMutation,
  usePatchUserMutation,
  ...rest
} = userApi;
