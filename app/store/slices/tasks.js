//import everything needed for the slice

import { createSlice } from '@reduxjs/toolkit';


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    view: 'calendar',
  },
  reducers: {
    taskAdded: (state, action) => {
        console.log(action.payload);
      },
    taskToggled: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    taskDeleted: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    changeView: (state, action) => {
      state.view = action.payload;
    },
  },
  },
);

export const { taskAdded, taskToggled, taskDeleted, changeView } = tasksSlice.actions;

export default tasksSlice.reducer;