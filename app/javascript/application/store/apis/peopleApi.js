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
        query: (attributes) => {
          return {
            url: '/',
            method: 'POST',
            body: attributes,
          };
        },
        transformResponse: (response, _meta, _arg) => {
          return response.payload;
        }
      }),
      fetchPerson: builder.query({
        providesTags: ['Person'],
        query: (person_id) => {
          return {
            url: `/${person_id}`,
            method: 'GET',
          };
        },
        transformResponse: (response, _meta, _arg) => {
          return response.payload;
        }
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
        query: () => {
          return {
            url: '',
            method: 'GET',
          };
        },
        transformResponse: (response, _meta, _arg) => {
          return response.payload;
        }
      }),
    };
  },
});

export const {
  useFetchPeopleQuery,
  useFetchPersonQuery,
  useAddPersonMutation,
  useRemovePersonMutation,
} = PeopleApi;

export default PeopleApi;
