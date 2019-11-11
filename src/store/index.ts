import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { RepositoriesState } from './duckus/repositories/types'
import rootReducer from './duckus/rootReducer'
import rootSaga from './duckus/rootSaga'

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();
const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;