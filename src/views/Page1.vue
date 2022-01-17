<template>
    <div class="mb-8 text-center">
        <Stories :items="posts"></Stories>
    </div>
</template>

<script>
import Layout from "../components/Layout.vue"
import Stories from "../components/Stories.vue"
import store from "../store/index.js"

export default {
  components: {
    Layout,
    Stories,
  },
  data () {
    return {
      blob:null
    }
  },
  computed: {
    posts() {
      return store.state.posts
    }
  },
  mounted() {
    store.dispatch("getPosts");
  }
}
</script>