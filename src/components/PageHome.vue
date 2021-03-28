<template>
  <div>Home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>
      {{ thread.title }}
    </h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>
        {{ userById(postById(postId).userId).name }}
      </p>
      <p>{{ postById(postId).text }}</p>
    </div>
  </div>
</template>
<script setup>
  import sourceData from '@/data.json'

  const threads = sourceData.threads
  const posts = sourceData.posts
  const users = sourceData.users

  function postById(postId) {
    return this.posts.find((post) => post.id === postId)
  }
  function userById(userId) {
    return this.users.find((user) => user.id === userId)
  }
</script>
<style></style>
