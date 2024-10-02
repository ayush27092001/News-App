import { collection, addDoc,getDocs, doc, deleteDoc,updateDoc } from "firebase/firestore";
import { db } from "../../firebase.config";




export const getUserFromFirebase = async () => {

    let userRef = collection(db, "user")

    const querySnapshot = await getDocs(userRef);

    let user = [];

    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        let d = doc.data();
        d.id = doc.id

        user.push(d)

    });
    // console.log(user);
    return user;
}

export const addUserToFirebase = async (user) => {


    let userRef = collection(db, "user")
    const docRef = await addDoc(userRef, user);

    console.log(docRef.id);

}

export const deleteUserFromFirebase = async (user) => {

    let userRef = collection(db, "user")

    await deleteDoc(doc(userRef, user.id));

}

export const updateUserFromFirebase = async (user,id) => {
  
    const userRef = doc(db, "user", id);

    // Set the "capital" field of the city 'DC'
    await updateDoc(userRef, user);

}

