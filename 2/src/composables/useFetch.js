import axios from "axios";
import { ref } from "vue";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  withCredentials: false,
});

export const useFetch = () => {
  const request = async (url, method, payload, headers = {}) => {
    const data = ref(null);
    const error = ref(null);
    const status = ref(null);

    try {
      const response = await http({ url, method, data: payload, headers });

      data.value = response.data;
      status.value = response.status;
    } catch (error) {
      error.value = error;
    }
    return { data, status, error };
  };

  return { request };
};
