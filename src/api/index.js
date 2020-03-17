import db from "../db/index";

export const createRef = (collection, docId) =>
  db.doc(`${collection}/` + docId);

export * from "./services";
export * from "./auth";
