import { Action, configureStore } from "@reduxjs/toolkit";
import {
	combineEpics,
	createEpicMiddleware,
	EpicMiddleware,
	StateObservable,
} from "redux-observable";
import { catchError, Observable } from "rxjs";
import { filterEpic, filterSlice } from "./filter";
import { settingsSlice } from "./settings";
import { apiSlice } from "./api";

// https://redux-observable.js.org/docs/basics/SettingUpTheMiddleware.html#adding-global-error-handler
const rootEpic = (
	action$: Observable<Action>,
	store$: StateObservable<void>,
	dependencies: unknown,
) =>
	combineEpics(filterEpic)(action$, store$, dependencies).pipe(
		catchError((error, source) => {
			console.error(error);
			return source;
		}),
	);
const epicMiddleware: EpicMiddleware<Action> = createEpicMiddleware();

export const store = configureStore({
	devTools: process.env.NODE_ENV === "development" ? { trace: true } : false,
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(epicMiddleware),
	reducer: {
		filter: filterSlice.reducer,
		settings: settingsSlice.reducer,
		api: apiSlice.reducer,
	},
});

epicMiddleware.run(rootEpic);
