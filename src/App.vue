<template>
  <div>
    <p>
      <router-link to="/user">用户首页/user/foo</router-link><br>
      <router-link to="/user/profile">用户简介/user/foo/profile</router-link><br>
      <router-link to="/user/posts">用户帖子/user/foo/posts</router-link>
    </p>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
