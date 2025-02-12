import axios from "axios";

const url = "http://localhost:5000/persperence-envision";

// Create an Axios instance
const api = axios.create({
  baseURL: url, // Your backend URL
});

// Get all initiatives
export const getAllInitiatives = async () => {
  try {
    const response = await api.get("/initiatives");
    return response.data;
  } catch (error) {
    console.error("Get all initiatives failed", error);
    throw error;
  }
};

// Fetch a single initiative by ID
export const getInitiativeById = async (id) => {
  try {
    const response = await api.get(`/initiatives/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get initiative by ID failed", error);
    throw error;
  }
};

// Fetch all associations
export const getAllAssociations = async () => {
  try {
    const response = await api.get("/associations");
    return response.data;
  } catch (error) {
    console.error("Get all associations failed", error);
    throw error;
  }
};

// Fetch a single association by ID
export const getAssociationById = async (id) => {
  try {
    const response = await api.get(`/associations/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get association by ID failed", error);
    throw error;
  }
};

// Fetch all careers
export const getAllCareers = async () => {
  try {
    const response = await api.get("/careers");
    return response.data;
  } catch (error) {
    console.error("Get all careers failed", error);
    throw error;
  }
};

// Fetch a single career by ID
export const getCareerById = async (id) => {
  try {
    const response = await api.get(`/careers/${id}`);
    return response.data;
  } catch (error) {
    console.error("Get career by ID failed", error);
    throw error;
  }
};

export default api;
