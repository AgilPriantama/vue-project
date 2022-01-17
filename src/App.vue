<template>
  <Layout>
  <div id="nav" class="text-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue"

export default {
  components: {
    Layout,
  },
}
</script>