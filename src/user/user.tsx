import {  USER_ENDPOINT, HttpMethods } from "@/constants";
import baseApi from "../base-api";


export interface User {
  id: number;
  fullName: string;
  email: string;
  username: string;
  mobileNumber: string;
  password: string;
  roleId: number;
  departments: string[];
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

type CreateUser = Pick<User, "fullName" | "email" | "username" | "mobileNumber" | "password" | "email" | "roleId" | "departments">;
async function getListUser(body = {}) {
  return await baseApi(USER_ENDPOINT.BASE, HttpMethods.Get, body);
}

async function getUserById(userId: number) {
  return await baseApi(USER_ENDPOINT.BASE + `/${userId}`, HttpMethods.Get);
}
async function getSearchUser(body = {}) {
    return await baseApi(USER_ENDPOINT.BASE + '/search', HttpMethods.Post);
  }
async function updateUserById(userId: Number, payload: Partial<User> | any) {
  return await baseApi(
    USER_ENDPOINT.BASE + `/${userId}`,
    HttpMethods.Patch,
    payload
  );
}

async function createNewUser(payload: CreateUser) {
  return await baseApi(USER_ENDPOINT.BASE, HttpMethods.Post, payload);
}

async function deleteUserById(userId: Number) {
  return await baseApi(
    USER_ENDPOINT.BASE + `/${userId}`,
    HttpMethods.Delete,
    {}
  );
}
export {
  getListUser,
  getUserById,
  updateUserById,
  createNewUser,
  deleteUserById,
  getSearchUser
};