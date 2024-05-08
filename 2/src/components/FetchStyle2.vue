<script setup>
import { useFetch2 } from "@/composables/useFetch2";
import { onBeforeMount, ref } from "vue";

const data = ref(null);

onBeforeMount(async () => {
  const { data: result, status, error } = await useFetch2("/posts", "get");
  data.value = result.value;
});

console.log(15390 + 40000);
</script>
<template>
  <h1>FetchStyle1</h1>
  <div>
    {{ data }}
  </div>
</template>

<style lang="scss" scoped></style>
