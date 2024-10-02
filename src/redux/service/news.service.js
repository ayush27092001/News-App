import {  collection, getDocs,addDoc } from "firebase/firestore"
import { db } from "../../firebase.config"

export const getNewsByApi = async (query = "all") => {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=2be0459037c44100ab7dfe59e7313548`)
    let data = await response.json()

    return data.articles
}

export const getLikedNewsFromApi = async () => {
    let userRef = collection(db, "likedNews")

    const querySnapshot = await getDocs(userRef);

    let likedNews = [];

    querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());

        let d = doc.data();
        d.id = doc.id

        likedNews.push(d)

    });

    // console.log(user);
    return likedNews;
    

}


export const likedNewsFromApi = async (news) => {
    let userRef = collection(db, "likedNews")

    // Add a new document with a generated id.
const docRef = await addDoc(userRef, news);
  console.log("Document written with ID: ", docRef.id);
    

}

