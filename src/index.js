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

// SAGAS
function* AllPhotos(action) {
	try {
		const response = yield axios.get(`/api/wakah`);
		yield put({ type: "SHOWME_GALLERY", payload: response.data });
	} catch (err) {
		console.log("Error in AllPhotos:", err);
	}
}

// Create the rootSaga generator function
function* rootSaga() {
	// ----- MOVIES YIELDS -----
	yield takeEvery("SHOWME_GALLERY", AllPhotos);
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const gallery = (state = [], action) => {
	switch (action.type) {
		case "SHOW_GALLERY":
			return action.payload;
		default:
			return state;
	}
};

// Create one store that all components can use
const store = createStore(
	combineReducers({
		gallery,
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
