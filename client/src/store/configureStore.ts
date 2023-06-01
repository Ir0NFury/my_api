import rootReducer from "../modules/rootReducer";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "../modules/rootSaga";
import {configureStore} from "@reduxjs/toolkit";
import { createLogger } from 'redux-logger';
import * as Redux from "redux";

const sagaMiddleware = createSagaMiddleware();

const devMode = process.env.NODE_ENV === 'development';


const configureStoreHandler = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: devMode,
        middleware: (getDefaultMiddleware) => [
            ...getDefaultMiddleware(),
            sagaMiddleware,
            (devMode && createLogger()) as Redux.Middleware
        ]
    })
    sagaMiddleware.run(rootSaga);
    return store
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStoreHandler>
export type AppDispatch = AppStore['dispatch']

export default configureStoreHandler;
