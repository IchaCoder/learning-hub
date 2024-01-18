import { useEffect, useMemo, useState } from "react";
import FirebaseService from "../context/service";

export const useFetchUser = (id) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const firebaseService = useMemo(() => new FirebaseService(), []);

	useEffect(() => {
		const handleUserUpdate = (updatedOrders) => {
			setData(updatedOrders);
			setLoading(false);
		};

		if (id) {
			const unsubscribe = firebaseService.getSingleUser(
				id,
				handleUserUpdate
			);
		}

		return () => {
			// Cleanup function
		};
	}, [id]);

	return { data, loading, error };
};
