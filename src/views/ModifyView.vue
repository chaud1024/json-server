<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const title = ref("");
const author = ref("");

const route = useRoute();
// console.log(route.query.id);
const id = route.query.id;
const router = useRouter();

onBeforeMount(() => {
  // fetch("http://localhost:3001/posts/" + id)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     title.value = result.title;
  //     author.value = result.author;
  //   });

  axios.get("http://localhost:3001/posts/" + id).then((result) => {
    title.value = result.data.title;
    author.value = result.data.author;
  });
});

const onModifyHandler = () => {
  const data = {
    title: title.value,
    author: author.value,
  };
  //fetch("http://localhost:3001/posts/" + id, {
  //  method: "PUT", // PUT: 기존 데이터 갱신하는 형태 -> 변경하는 필드 중 빠진 게 없는지 확인
  // PATCH: 변경하는 데이터만 골라서 수정 -> 변경하지 않은 필드는 내버려둔다
  //  body: JSON.stringify(data),
  //  headers: {
  //    "Content-type": "application/json; charset=UTF-8",
  //  },
  //})
  //  .then((response) => response.json())
  //  .then((result) => router.push("/"));

  axios
    .patch("http://localhost:3001/posts/" + id, data)
    .then((result) => {
      if (result.status === 200) {
        router.push("/");
      }
    })
    .catch((err) => alert("error : " + err.message));
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
