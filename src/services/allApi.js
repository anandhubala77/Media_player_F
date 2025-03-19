import { serverurl } from "./serverUrl";
import { commonApi } from "./commonApi";

// api call for upload video

export const uploadVideo = async (reqBody) => {
  return await commonApi("POST", `${serverurl}/videos`, reqBody);
};

//api call for get videos - get call

export const getAllVideos = async () => {
  return await commonApi("GET", `${serverurl}/videos`, "");
};

// delete video

export const deleteVideo = async (id) => {
  return await commonApi("DELETE", `${serverurl}/videos/${id}`, "");
};

// Add to History

export const addToHistory = async (data) => {
  return await commonApi("POST", `${serverurl}/history`, data);
};

// Get History

export const getHistory = async () => {
  return await commonApi("GET", `${serverurl}/history`, "");
};

//  Dlete History

export const deleteWatchHistory = async (id) => {
  return await commonApi("DELETE", `${serverurl}/history/${id}`, "");
};

//  addcategory

export const addcategory = async (data) => {
  return await commonApi("POST", `${serverurl}/categories`, data);
};

// Get all Category

export const getAllCategories = async () => {
  return await commonApi("GET", `${serverurl}/categories`, "");
};

//delete category

export const deleteCategory = async (id) => {
  return await commonApi("DELETE", `${serverurl}/categories/${id}`, "");
};

//get video etails by id

export const getVideodetailsById = async (id) => {
  return await commonApi("GET", `${serverurl}/videos/${id}`);
};
//update category

export const updateCategory = async (id, data) => {
  return await commonApi("PUT", `${serverurl}/category/${id}`, data);
};
