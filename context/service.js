import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import {
	addDoc,
	collection,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";

class FirebaseService {
	async signUp(email, password) {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			return user;
		} catch (error) {
			throw error;
		}
	}

	async logIn(email, password) {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			const user = userCredential.user;
			return user;
		} catch (error) {
			throw error;
		}
	}

	async logOut() {
		try {
			await signOut(auth);
		} catch (error) {
			throw error;
		}
	}

	async addUserDetails({ email, name, uid, id }) {
		try {
			await addDoc(collection(db, "users"), {
				email,
				name,
				uid,
				student_id: id,
			});
		} catch (error) {
			console.log(error);
		}
	}

	async resetPassword(email) {
		try {
			await sendPasswordResetEmail(auth, email);
		} catch (error) {
			throw error;
		}
	}

	async getSingleUser(id, onData) {
		try {
			if (!id) {
				throw new Error("User ID is empty.");
			}

			const collectionRef = collection(db, "users");
			const q = query(collectionRef, where("uid", "==", id));

			// Subscribe to real-time changes using onSnapshot
			const unsubscribe = onSnapshot(q, (querySnapshot) => {
				let data = {};
				querySnapshot.forEach((doc) => {
					// Access the document data
					data = { ...doc.data(), id: doc.id };
				});

				// Call the provided onData callback with the updated user data
				onData(data);
			});

			// Return the unsubscribe function to stop listening
			return unsubscribe;
		} catch (error) {
			throw new Error(error.message);
		}
	}
}

export default FirebaseService;
