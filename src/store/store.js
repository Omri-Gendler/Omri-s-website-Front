import { legacy_createStore as createStore, combineReducers } from 'redux'

// Import your reducers here when you create them
// import { carReducer } from './reducers/car.reducer.js'
// import { userReducer } from './reducers/user.reducer.js'
// import { reviewReducer } from './reducers/review.reducer.js'
// import { systemReducer } from './reducers/system.reducer.js'

// Temporary placeholder reducer
const initialState = {}

const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const rootReducer = combineReducers({
    // Add your reducers here:
    // carModule: carReducer,
    // userModule: userReducer,
    // reviewModule: reviewReducer,
    // systemModule: systemReducer,
    
    // Temporary placeholder:
    temp: tempReducer
})

export const store = createStore(rootReducer)

// For development - you can remove this in production
window.__store__ = store