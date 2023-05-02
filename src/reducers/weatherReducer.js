import { createSlice } from "@reduxjs/toolkit";

export const hourlyWeatherSlice = createSlice({
  name: "hourly",
  initialState: [],
  reducers: {
    getHourlydata: (state, { type, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const dailyWeatherSlice = createSlice({
  name: "daily",
  initialState: [],
  reducers: {
    getDailydata: (state, { type, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const currentWeatherSlice = createSlice({
  name: "current",
  initialState: {},
  reducers: {
    getCurrentdata: (state, { type, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const currentLocationSlice = createSlice({
  name: "locations",
  initialState: null,
  reducers: {
    getLocationsdata: (state, { type, payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { getHourlydata } = hourlyWeatherSlice.actions;
export const { getDailydata } = dailyWeatherSlice.actions;
export const { getCurrentdata } = currentWeatherSlice.actions;
export const { getLocationsdata } = currentLocationSlice.actions;

export default {
  hourly: hourlyWeatherSlice.reducer,
  daily: dailyWeatherSlice.reducer,
  current: currentWeatherSlice.reducer,
  locations: currentLocationSlice.reducer,
};
