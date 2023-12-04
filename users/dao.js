import model from "./model.js";
export const createUser = (user) => model.create(user);
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findOne({ _id: userId.toString()});
export const findUserByUsername = (username) =>
  model.findOne({ username: username });
export const findUserByCredentials = (usr, pass) => 
  model.findOne({ username: usr, password: pass });
  export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId.toString() }, { $set: user });
  export const deleteUser = (userId) =>
  model.deleteOne({ _id: userId.toString() });
