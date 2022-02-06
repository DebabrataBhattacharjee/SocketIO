import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginReducer from './LoginScreen/reducer';

const rootReducer = combineReducers({
    login: loginReducer,
})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(rootReducer);
let persistor = persistStore(store)

export { store, persistor };