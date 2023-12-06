import { configureStore } from '@reduxjs/toolkit'
import credentialReducer from '../features/slicer/credentialSlicer'

export default configureStore({
  reducer: {
    credential: credentialReducer
  }
})