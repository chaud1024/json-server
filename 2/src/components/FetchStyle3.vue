<script setup>
import { useFetch3 } from "@/composables/useFetch3";
import { watch, ref } from "vue";

const url = ref("/posts");
const method = ref("get");

const { data, status, error } = useFetch3(url, method);
watch(data, (newValue) => {
  console.log(newValue);
});

const test = () => {
  url.value = "/posts/1";
};
</script>
<template>
  <h1>FetchStyle3</h1>
  <div>
    <button @click="test">CLICK!</button>
    {{ data }}
  </div>
</template>

<style lang="scss" scoped></style>
