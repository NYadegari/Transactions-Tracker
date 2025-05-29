import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    // Authorization:""
  },
});

// Optional: Add interceptors to handle requests/responses globally
// This is useful for logging, error handling, or adding authorization tokens dynamically

// Request Interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Modify the config before the request is sent, e.g., attach token
    //  const token = localStorage.getItem('token');
    //   if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // Handle errors in the request
    return Promise.reject(error);
  }
);

// Response Interceptor
apiClient.interceptors.response.use(
  (response) => {
    // Any response status code 2xx is handled here
    return response;
  },
  (error) => {
    // Handle response errors globally
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // No response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error setting up request:", error.message);
    }
    return Promise.reject(error);
  }
);

export const getData = async (endPoint) => {
  try {
    const response = await apiClient.get(endPoint);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postData = async (endPoint, data) => {
  try {
    const response = await apiClient.post(endPoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const putData = async (endPoint, data) => {
  try {
    const response = await apiClient.put(endPoint, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export const deleteData = async (endPoint) => {
  try {
    const response = await apiClient.delete(endPoint);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
