import { configureStore } from '@reduxjs/toolkit';
import { itemsApi } from './services/api-service';
const store = configureStore({
  reducer: {
    items: itemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(itemsApi.middleware);
  },
});

export default store;
