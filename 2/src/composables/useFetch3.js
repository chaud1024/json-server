import axios from "axios";
import { ref, toValue, watchEffect } from "vue";

const http = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
  withCredentials: true,
});

export const useFetch3 = (url, method, payload, headers = {}) => {
  const data = ref(null);
  const error = ref(null);
  const status = ref(null);

  const request = () => {
    http({
      url: toValue(url),
      method: toValue(method),
      data: toValue(payload),
      headers,
    })
      .then((response) => {
        data.value = response.data;
        status.value = response.status;
      })
      .catch((error) => {
        error.value = error;
      });
  };

  watchEffect(() => {
    request();
  });

  return { data, status, error };
};
