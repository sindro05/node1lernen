import * as userModel from "../models/user.model.js";

export const createUser = async (data) => {
  return userModel.createUser(data);
};

export const getUsers = async () => {
  return userModel.getUsers();
};
