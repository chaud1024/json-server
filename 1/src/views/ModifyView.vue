<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";
import { useFetch } from "@/composable/useFetch";

const title = ref("");
const author = ref("");

const route = useRoute();
const id = route.query.id;
const router = useRouter();

const { request } = useFetch();

onBeforeMount(async () => {
  const { data: result, status } = await request(`/posts/${id}`, "get");
  if (status.value === 200) {
    title.value = result.value.title;
    author.value = result.value.author;
  }
});

const onModifyHandler = async () => {
  const data = {
    title: title.value,
    author: author.value,
  };

  const { status, error } = await request(`/posts/${id}`, "patch", data);
  if (status.value === 200) {
    router.push("/");
  } else {
    alert("error : " + error.value);
  }
};
</script>
<template>
  <div>Modify</div>
  <form @submit.prevent>
    <label for="title">title</label>
    <input type="text" id="title" v-model="title" />
    <br />
    <label for="author">views</label>
    <input type="text" id="author" v-model="author" />
    <br />
    <button @click="onModifyHandler">수정</button>
  </form>
</template>

<style lang="scss" scoped></style>
