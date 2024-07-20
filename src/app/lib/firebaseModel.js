// Example CRUD operations
import { db } from "./firebase";
/* const db = firebase.database().ref("/data"); */

export const getData = async () => {
  const snapshot = await db.once("value");
  return snapshot.val();
};

export const addData = async (data) => {
  const newDataRef = db.push();
  await newDataRef.set(data);
};

export const updateData = async (id, newData) => {
  await db.child(id).update(newData);
};

export const deleteData = async (id) => {
  await db.child(id).remove();
};
