<script setup>
import { usePostsStore } from "@/stores/posts";

const postsStore = usePostsStore();

postsStore.getPosts();
</script>
<template>
  <h1>FetchStyle4 with Pinia</h1>
  <div>
    {{ postsStore.posts }}
  </div>
</template>

<style lang="scss" scoped></style>
