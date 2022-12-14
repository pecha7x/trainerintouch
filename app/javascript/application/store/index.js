import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import peopleApi from './apis/peopleApi';

export const store = configureStore({
  reducer: {
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(peopleApi.middleware);
  },
});

setupListeners(store.dispatch);

export {
  useFetchPeopleQuery,
  useFetchPersonQuery,
  useAddPersonMutation,
  useUpdatePersonMutation,
  useRemovePersonMutation,
} from './apis/peopleApi';
