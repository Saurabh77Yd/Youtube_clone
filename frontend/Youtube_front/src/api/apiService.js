import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Auth end-point
export const register = (data) => api.post("/auth/register", data);
export const login = (data) => api.post("/auth/login", data);

// Video end-point
export const fetchVideos = () => api.get("/videos");
export const fetchVideo = (videoId) => api.get(`/videos/${videoId}`);

// Channel end-point
export const createChannel = (data) => api.post("/channels", data);
export const fetchChannel = (channelId) => api.get(`/channels/${channelId}`);

// Comment end-point
export const addComment = (videoId, data) =>
  api.post(`/comments/${videoId}`, data);
export const getComments = (videoId) => api.get(`/comments/${videoId}`);
export const updateComment = (commentId, data) =>
  api.put(`/comments/${commentId}`, data);
export const deleteComment = (commentId) =>
  api.delete(`/comments/${commentId}`);
