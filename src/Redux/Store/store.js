import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../Reducers/RootReducer'

// It stores the whole state of the app in an immutable object tree
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
)