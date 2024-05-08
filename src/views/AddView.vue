<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "@/composable/useFetch";

const title = ref("");
const author = ref("");
const router = useRouter();

const { request } = useFetch();

const onAddHandler = async () => {
  const data = {
    title: title.value,
    author: author.value,
  };

  const { status, error } = await request("/posts", "post", data);

  if (status.value === 201) {
    router.push("/");
  } else {
    alert("error : " + error.value);
  }
};
</script>
<template>
  <div class="about">
    <h1>ADD vue</h1>
    <form @submit.prevent>
      <label for="title">title</label>
      <input type="text" id="title" v-model="title" />
      <br />
      <label for="author">views</label>
      <input type="text" id="author" v-model="author" />
      <br />
      <button @click="onAddHandler">등록</button>
    </form>
  </div>
</template>

<style></style>
