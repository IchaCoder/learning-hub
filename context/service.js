import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { addDoc, collection } from "firebase/firestore";

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

	async addUserDetails({ email, name, uid }) {
		try {
			await addDoc(collection(db, "users"), {
				email,
				name,
				uid,
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
}

export default FirebaseService;
