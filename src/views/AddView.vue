<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { injectStrict } from "@/utils/injectTyped";
import { AxiosKeys } from "@/libs/symbols";

const title = ref("");
const author = ref("");
const router = useRouter();

const http = injectStrict(AxiosKeys);

const onAddHandler = () => {
  const data = {
    title: title.value,
    author: author.value,
  };
  // fetch("http://localhost:3001/posts", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((result) => router.push("/"));

  http
    .post("/posts", data)
    .then((result) => {
      if (result.status === 201) {
        router.push("/");
      }
    })
    .catch((err) => alert("error : " + err.message));
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
