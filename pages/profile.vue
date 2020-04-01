<template>
  <div>profile</div>
</template>
<script>
export default {
  head: {
    title: "Моя сторінка"
  },
  layout: "panel",
  middleware: ["auth"]
};
</script>
<style lang="scss" scoped>
</style>