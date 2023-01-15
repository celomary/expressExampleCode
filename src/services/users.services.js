import UserModel from "../models/users.schema.js";

export const createUser = async (userData) => {
  const user = new UserModel(userData);
  await user.save();
  return true;
};

export const getAllUsers = async () => {
  const users = await UserModel.find();
  return users;
};

export const getUserById = async (id) => {
  const user = await UserModel.findById(id);
  return user;
};

export const deleteUser = async (id) => {
  const user = await UserModel.findByIdAndDelete(id);
  return !!user;
};
