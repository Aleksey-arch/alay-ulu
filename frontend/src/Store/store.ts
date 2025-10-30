import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {},
})

export type StoreState = ReturnType<typeof store.getState>
export type StoreActions = ReturnType<typeof store.dispatch>

export default store
