import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const PeopleApi = createApi({
  reducerPath: 'people',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints(builder) {
    return {
      removePerson: builder.mutation({
        query: (person) => {
          return {
            url: `/people/${person.id}`,
            method: 'DELETE',
          };
        },
      }),
      addPerson: builder.mutation({
        query: (user) => {
          return {
            url: '/people',
            method: 'POST',
            body: {
              userId: user.id,
              name: 'Dummy Name',
            },
          };
        },
      }),
      fetchPeople: builder.query({
        query: (user) => {
          return {
            url: '/people',
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
