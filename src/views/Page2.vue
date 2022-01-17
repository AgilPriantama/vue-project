<template>
  <div class="text-center">
    <input type="file" @change="changeFile" accept="application/pdf" class="mb-2"/>
    <object :data="blob" width="100%" height="700"/>
  </div>
</template>

<script>
export default {
  data: () => ({
    blob: null
  }),

  methods: {
    changeFile(event) {
      const file = event.target.files[0]
      this.blob = URL.createObjectURL(file)
    }
  }
}
</script>
