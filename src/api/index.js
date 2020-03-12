import db from "../db/index";
import firebase from "firebase/app";
import "firebase/auth";

const createUserProfile = userProfile => {
  return db
    .collection("profile")
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
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  }
  catch (error) {
    return await Promise.reject(error.message);
  }
};

export const fetchServiceById = serviceId => {
  return db
    .collection("services")
    .doc(serviceId)
    .get()
    .then(snapshot => {
      return { id: snapshot.id, ...snapshot.data() };
    });
};

export const fetchServices = () => {
  return db
    .collection("services")
    .get()
    .then(snapshot => {
      const services = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      return services;
    });
};
