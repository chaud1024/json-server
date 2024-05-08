<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { injectStrict } from "@/utils/injectTyped";
import { AxiosKeys } from "@/libs/symbols";

const data = ref(null);
const router = useRouter();
// const http = axios.create({
//   baseURL: "http://localhost:3001",
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//   withCredentials: false,
// });
const http = injectStrict(AxiosKeys);

const getData = () => {
  // fetch("http://localhost:3001/posts")
  //   .then((response) => response.json())
  //   .then((result) => (data.value = result));

  http
    .get("/posts") // 사용자정의 baseURL 설정했음
    .then((result) => (data.value = result.data));
};

onBeforeMount(() => {
  getData();
});

const goModify = (id) => {
  // router.push(`/modify/${id}`);
  router.push("/modify?id=" + id);
};

const deleteItem = (id) => {
  // fetch("http://localhost:3001/posts/" + id, {
  //   method: "DELETE",
  // })
  //   .then((response) => response.json())
  //   .then((result) => getData())
  //   .catch((err) => console.log(err));

  http
    .delete("/posts/" + id)
    .then((result) => {
      if (result.status === 200) {
        getData();
      }
    })
    .catch((err) => {
      alert("error : " + err.message);
    });
};
</script>

<template>
  <h1>Home vue</h1>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Manage</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="d in data" :key="d.id">
        <td>{{ d.id }}</td>
        <td>{{ d.title }}</td>
        <td>{{ d.author }}</td>
        <td>
          <button @click="goModify(d.id)">수정</button>
          <button @click="deleteItem(d.id)">삭제</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border: 1px solid #ccc;
}
th {
  background-color: #eee;
  width: calc(100% / 4);
  height: 25px;
  border-bottom: 1px solid #ccc;
}
td {
  text-align: center;
  height: 25px;
}
tr {
  &:not(:last-child) {
    td {
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
