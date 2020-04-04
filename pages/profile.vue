<template>
  <div>
    <el-form>
      {{this.$auth.user}}
      <!-- <el-form-item label="">
        <el-input></el-input>
      </el-form-item>-->
    </el-form>
  </div>
</template>
<script>
export default {
  head: {
    title: "Моя сторінка"
  },

  layout: "panel",
  middleware: ["auth"],
  async asyncData({ store }) {
    // console.log(this.$auth.user);
    // await store.dispatch("user/fetchById", idUser);
    // return {
    //   post: { ...post, views: ++post.views }
    // };
  }
};
</script>
<style lang="scss" scoped>
</style>