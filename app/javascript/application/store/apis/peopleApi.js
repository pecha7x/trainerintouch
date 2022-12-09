import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PeopleApi = createApi({
  reducerPath: 'people',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/v1/people'
  }),
  endpoints(builder) {
    return {
      removePerson: builder.mutation({
        invalidatesTags: ['Person'],
        // invalidatesTags: (result, error, person) => {
        //   return [{ type: 'Person', id: person.id }];
        // },
        query: (person) => {
          return {
            url: `/${person.id}`,
            method: 'DELETE',
          };
        },
      }),
      addPerson: builder.mutation({
        invalidatesTags: ['Person'],
        // invalidatesTags: (result, error, user) => {
        //   return [{ type: 'People', id: user.id }];
        // },
        query: (user) => {
          return {
            url: '/',
            method: 'POST',
            body: {
              userId: user.id,
              name: 'Dummy Name',
            },
          };
        },
      }),
      fetchPeople: builder.query({
        providesTags: ['Person'],
        // providesTags: (result, error, user) => {
        //   const tags = result.map((person) => {
        //     return { type: 'Person', id: person.id };
        //   });
        //   tags.push({ type: 'People', id: user.id });
        //   return tags;
        // },
        query: (user) => {
          return {
            url: '',
            params: {
              userId: user?.id,
            },
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const {
  useFetchPeopleQuery,
  useAddPersonMutation,
  useRemovePersonMutation,
} = PeopleApi;

export default PeopleApi;
