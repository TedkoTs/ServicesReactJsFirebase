import db from "../db/index";
import firebase from "firebase/app";
import "firebase/auth";

const createUserProfile = userProfile => {
  return db
    .collection("profiles")
    .doc(userProfile.uid)
    .set(userProfile);
};

export const register = async ({ email, password, fullName, avatar }) => {
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    const { user } = res;
    const userProfile = {
      uid: user.uid,
      fullName,
      email,
      avatar,
      services: [],
      decription: ""
    };
    await createUserProfile(userProfile);
    return userProfile;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    return await Promise.reject(error.message);
  }
};

export const onAuthStateChanged = onAuthCallback =>
  firebase.auth().onAuthStateChanged(onAuthCallback);

export const getUserProfile = uid => {
  return db
    .collection("profiles")
    .doc(uid)
    .get()
    .then(snapshot => ({ uid, ...snapshot.data() }));
};

export const logout = () => firebase.auth().signOut();
