<script setup>
import { useFetch } from "@/composables/useFetch";
import { onBeforeMount, ref } from "vue";

const { request } = useFetch();

const data = ref(null);

onBeforeMount(async () => {
  const { data: result, status, error } = await request("/posts", "get");
  data.value = result.value;
});
</script>
<template>
  <h1>FetchStyle1</h1>
  <div>
    {{ data }}
  </div>
</template>

<style lang="scss" scoped></style>
