import {createStore} from "redux";
import rootReducer from "./reducers";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);



export default () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store)
    return { store, persistor }
};
