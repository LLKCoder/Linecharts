import React from 'react'
import { render } from 'react-dom'
import { takeLatest, takeEvery, put, select, call, all} from 'redux-saga/effects'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducers, createStore, applyMiddleware, compose }  from 'redux'
import * as LayoutComponent from '../components/layout/layout'

// state初期化
const initialState = {
    LayoutComponent: LayoutComponent.initialState
}

// reducer初期化
const rootReducer = combineReducers({
    LayoutComponent: LayoutComponent.reducer
})

const sagaMiddleware = createSagaMiddleware()
const composeEnhancser = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, initialState, composeEnhancser(applyMiddleware(sagaMiddleware)))

const LineCharts = () => (
    <div>
        <style jsx global>{`
        
        `}</style>
        <Provider store={store}>
            <LayoutComponent.view />
        </Provider>
    </div>
)

export default LineCharts