<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "@/composable/useFetch";

const data = ref(null);
const router = useRouter();
const { request } = useFetch();

const getData = async () => {
  const { data: result } = await request("/posts", "get");
  data.value = result.value;
};

onBeforeMount(() => {
  getData();
});

const goModify = (id) => {
  // router.push(`/modify/${id}`);
  router.push("/modify?id=" + id);
};

const deleteItem = async (id) => {
  const { status, error } = await request(`/posts/${id}`, "delete");
  if (status.value === 200) {
    getData();
  } else {
    alert("error : " + error.value);
  }
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
