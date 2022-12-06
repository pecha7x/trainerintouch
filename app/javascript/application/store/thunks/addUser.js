import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addUser = createAsyncThunk('users/add', async () => {
  const response = await axios.post('http://localhost:3005/users', {
    name: 'DummyName',
  });

  return response.data;
});

export { addUser };
