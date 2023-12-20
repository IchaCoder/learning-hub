import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/auth.user
				const uid = user.uid;
				setUser(user);
				// ...
			} else {
				// User is signed out
				setUser(null);
				// ...
			}
		});
	});

	const defaultValues = {
		isLoggedIn,
		setIsLoggedIn,
		user,
		setUser,
	};
	return (
		<AppContext.Provider value={defaultValues}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
