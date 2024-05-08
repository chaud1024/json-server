import { ref } from "vue";
import { defineStore } from "pinia";
import { useFetch } from "@/composables/useFetch";

export const usePostsStore = defineStore("posts", () => {
  const { request } = useFetch();
  const posts = ref(null);

  const getPosts = async () => {
    const { data } = await request("/posts", "get");
    posts.value = data;
  };

  return { getPosts, posts };
});
