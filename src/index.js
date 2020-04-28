import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.js";
import { createStore, combineReducers, applyMiddleware } from "redux";
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";

// Create the rootSaga generator function
function* rootSaga() {
	// ----- PHOTOS YIELDS -----
	yield takeEvery("GET_GALLERY", getPhotos);
}

// SAGAS
function* getPhotos(action) {
	try {
		const response = yield axios.get("/bear");
		yield put({ type: "SET_GALLERY", payload: response.data });
	} catch (err) {
		console.log("Error in allPhotos:", err);
	}
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const galleryReducer = (state = [], action) => {
	switch (action.type) {
		case "SET_GALLERY":
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const store = createStore(
	combineReducers({
		galleryReducer,
	}),
	// Add sagaMiddleware to our store
	applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
